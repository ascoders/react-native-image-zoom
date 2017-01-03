"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var React = require("react");
var react_native_1 = require("react-native");
var typings = require("./image-zoom.type");
var image_zoom_style_1 = require("./image-zoom.style");
var isMobile = function isMobile() {
    if (react_native_1.Platform.OS === 'web') {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        );
    } else {
        return true;
    }
};

var ImageViewer = function (_React$Component) {
    (0, _inherits3.default)(ImageViewer, _React$Component);

    function ImageViewer() {
        (0, _classCallCheck3.default)(this, ImageViewer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ImageViewer.__proto__ || Object.getPrototypeOf(ImageViewer)).apply(this, arguments));

        _this.state = new typings.State();
        _this.lastPositionX = null;
        _this.positionX = 0;
        _this.animatedPositionX = new react_native_1.Animated.Value(0);
        _this.lastPositionY = null;
        _this.positionY = 0;
        _this.animatedPositionY = new react_native_1.Animated.Value(0);
        _this.scale = 1;
        _this.animatedScale = new react_native_1.Animated.Value(1);
        _this.zoomLastDistance = null;
        _this.zoomCurrentDistance = 0;
        _this.horizontalWholeOuterCounter = 0;
        _this.horizontalWholeCounter = 0;
        _this.verticalWholeCounter = 0;
        _this.centerDiffX = 0;
        _this.centerDiffY = 0;
        _this.lastClickTime = 0;
        _this.doubleClickX = 0;
        _this.doubleClickY = 0;
        _this.isDoubleClickScale = false;
        return _this;
    }

    (0, _createClass3.default)(ImageViewer, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            var setResponder = isMobile();
            this.imagePanResponder = react_native_1.PanResponder.create({
                onStartShouldSetPanResponder: function onStartShouldSetPanResponder(evt, gestureState) {
                    return setResponder;
                },
                onStartShouldSetPanResponderCapture: function onStartShouldSetPanResponderCapture(evt, gestureState) {
                    return setResponder;
                },
                onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(evt, gestureState) {
                    return setResponder;
                },
                onMoveShouldSetPanResponderCapture: function onMoveShouldSetPanResponderCapture(evt, gestureState) {
                    return setResponder;
                },
                onPanResponderTerminationRequest: function onPanResponderTerminationRequest(evt, gestureState) {
                    return false;
                },
                onPanResponderGrant: function onPanResponderGrant(evt, gestureState) {
                    _this2.lastPositionX = null;
                    _this2.lastPositionY = null;
                    _this2.zoomLastDistance = null;
                    _this2.horizontalWholeCounter = 0;
                    _this2.verticalWholeCounter = 0;
                    _this2.lastTouchStartTime = new Date().getTime();
                    _this2.isDoubleClickScale = false;
                    if (evt.nativeEvent.changedTouches.length > 1) {
                        _this2.centerDiffX = (evt.nativeEvent.changedTouches[0].pageX + evt.nativeEvent.changedTouches[1].pageX) / 2 - _this2.props.cropWidth / 2;
                        _this2.centerDiffY = (evt.nativeEvent.changedTouches[0].pageY + evt.nativeEvent.changedTouches[1].pageY) / 2 - _this2.props.cropHeight / 2;
                    }
                    if (_this2.longPressTimeout) {
                        clearTimeout(_this2.longPressTimeout);
                    }
                    _this2.longPressTimeout = setTimeout(function () {
                        _this2.props.onLongPress();
                    }, _this2.props.longPressTime);
                    if (evt.nativeEvent.changedTouches.length <= 1) {
                        if (new Date().getTime() - _this2.lastClickTime < 175) {
                            _this2.lastClickTime = 0;
                            _this2.props.onDoubleClick();
                        } else {
                            _this2.lastClickTime = new Date().getTime();
                        }
                    }
                },
                onPanResponderMove: function onPanResponderMove(evt, gestureState) {
                    if (evt.nativeEvent.changedTouches.length <= 1) {
                        var diffX = gestureState.dx - _this2.lastPositionX;
                        if (_this2.lastPositionX === null) {
                            diffX = 0;
                        }
                        var diffY = gestureState.dy - _this2.lastPositionY;
                        if (_this2.lastPositionY === null) {
                            diffY = 0;
                        }
                        _this2.lastPositionX = gestureState.dx;
                        _this2.lastPositionY = gestureState.dy;
                        _this2.horizontalWholeCounter += diffX;
                        _this2.verticalWholeCounter += diffY;
                        if (Math.abs(_this2.horizontalWholeCounter) > 5 || Math.abs(_this2.verticalWholeCounter) > 5) {
                            clearTimeout(_this2.longPressTimeout);
                        }
                        if (_this2.props.panToMove) {
                            if (_this2.props.imageWidth * _this2.scale > _this2.props.cropWidth) {
                                if (_this2.horizontalWholeOuterCounter > 0) {
                                    if (diffX < 0) {
                                        if (_this2.horizontalWholeOuterCounter > Math.abs(diffX)) {
                                            _this2.horizontalWholeOuterCounter += diffX;
                                            diffX = 0;
                                        } else {
                                            diffX += _this2.horizontalWholeOuterCounter;
                                            _this2.horizontalWholeOuterCounter = 0;
                                            _this2.props.horizontalOuterRangeOffset(0);
                                        }
                                    } else {
                                        _this2.horizontalWholeOuterCounter += diffX;
                                    }
                                } else if (_this2.horizontalWholeOuterCounter < 0) {
                                    if (diffX > 0) {
                                        if (Math.abs(_this2.horizontalWholeOuterCounter) > diffX) {
                                            _this2.horizontalWholeOuterCounter += diffX;
                                            diffX = 0;
                                        } else {
                                            diffX += _this2.horizontalWholeOuterCounter;
                                            _this2.horizontalWholeOuterCounter = 0;
                                            _this2.props.horizontalOuterRangeOffset(0);
                                        }
                                    } else {
                                        _this2.horizontalWholeOuterCounter += diffX;
                                    }
                                } else {}
                                _this2.positionX += diffX / _this2.scale;
                                var horizontalMax = (_this2.props.imageWidth * _this2.scale - _this2.props.cropWidth) / 2 / _this2.scale;
                                if (_this2.positionX < -horizontalMax) {
                                    _this2.positionX = -horizontalMax;
                                    _this2.horizontalWholeOuterCounter += -1 / 1e10;
                                } else if (_this2.positionX > horizontalMax) {
                                    _this2.positionX = horizontalMax;
                                    _this2.horizontalWholeOuterCounter += 1 / 1e10;
                                }
                                _this2.animatedPositionX.setValue(_this2.positionX);
                            } else {
                                _this2.horizontalWholeOuterCounter += diffX;
                            }
                            if (_this2.horizontalWholeOuterCounter > _this2.props.maxOverflow) {
                                _this2.horizontalWholeOuterCounter = _this2.props.maxOverflow;
                            } else if (_this2.horizontalWholeOuterCounter < -_this2.props.maxOverflow) {
                                _this2.horizontalWholeOuterCounter = -_this2.props.maxOverflow;
                            }
                            if (_this2.horizontalWholeOuterCounter !== 0) {
                                _this2.props.horizontalOuterRangeOffset(_this2.horizontalWholeOuterCounter);
                            }
                            if (_this2.props.imageHeight * _this2.scale > _this2.props.cropHeight) {
                                _this2.positionY += diffY / _this2.scale;
                                _this2.animatedPositionY.setValue(_this2.positionY);
                            }
                        }
                    } else {
                        if (_this2.longPressTimeout) {
                            clearTimeout(_this2.longPressTimeout);
                        }
                        if (_this2.props.pinchToZoom) {
                            var minX = void 0;
                            var maxX = void 0;
                            if (evt.nativeEvent.changedTouches[0].locationX > evt.nativeEvent.changedTouches[1].locationX) {
                                minX = evt.nativeEvent.changedTouches[1].pageX;
                                maxX = evt.nativeEvent.changedTouches[0].pageX;
                            } else {
                                minX = evt.nativeEvent.changedTouches[0].pageX;
                                maxX = evt.nativeEvent.changedTouches[1].pageX;
                            }
                            var minY = void 0;
                            var maxY = void 0;
                            if (evt.nativeEvent.changedTouches[0].locationY > evt.nativeEvent.changedTouches[1].locationY) {
                                minY = evt.nativeEvent.changedTouches[1].pageY;
                                maxY = evt.nativeEvent.changedTouches[0].pageY;
                            } else {
                                minY = evt.nativeEvent.changedTouches[0].pageY;
                                maxY = evt.nativeEvent.changedTouches[1].pageY;
                            }
                            var widthDistance = maxX - minX;
                            var heightDistance = maxY - minY;
                            var diagonalDistance = Math.sqrt(widthDistance * widthDistance + heightDistance * heightDistance);
                            _this2.zoomCurrentDistance = Number(diagonalDistance.toFixed(1));
                            if (_this2.zoomLastDistance !== null) {
                                var distanceDiff = (_this2.zoomCurrentDistance - _this2.zoomLastDistance) / 200;
                                var zoom = _this2.scale + distanceDiff;
                                if (zoom < 0.6) {
                                    zoom = 0.6;
                                }
                                if (zoom > 10) {
                                    zoom = 10;
                                }
                                var beforeScale = _this2.scale;
                                _this2.scale = zoom;
                                _this2.animatedScale.setValue(_this2.scale);
                                var diffScale = _this2.scale - beforeScale;
                                _this2.positionX -= _this2.centerDiffX * diffScale / _this2.scale;
                                _this2.positionY -= _this2.centerDiffY * diffScale / _this2.scale;
                                _this2.animatedPositionX.setValue(_this2.positionX);
                                _this2.animatedPositionY.setValue(_this2.positionY);
                            }
                            _this2.zoomLastDistance = _this2.zoomCurrentDistance;
                        }
                    }
                },
                onPanResponderRelease: function onPanResponderRelease(evt, gestureState) {
                    if (_this2.isDoubleClickScale) {
                        return;
                    }
                    var stayTime = new Date().getTime() - _this2.lastTouchStartTime;
                    var moveDistance = Math.sqrt(gestureState.dx * gestureState.dx + gestureState.dy * gestureState.dy);
                    if (evt.nativeEvent.changedTouches.length === 1 && stayTime < _this2.props.leaveStayTime && moveDistance < _this2.props.leaveDistance) {
                        _this2.props.onClick();
                    } else {
                        _this2.props.responderRelease(gestureState.vx);
                    }
                    if (_this2.scale < 1) {
                        _this2.scale = 1;
                        react_native_1.Animated.timing(_this2.animatedScale, {
                            toValue: _this2.scale,
                            duration: 100
                        }).start();
                    }
                    if (_this2.props.imageWidth * _this2.scale <= _this2.props.cropWidth) {
                        _this2.positionX = 0;
                        react_native_1.Animated.timing(_this2.animatedPositionX, {
                            toValue: _this2.positionX,
                            duration: 100
                        }).start();
                    }
                    if (_this2.props.imageHeight * _this2.scale <= _this2.props.cropHeight) {
                        _this2.positionY = 0;
                        react_native_1.Animated.timing(_this2.animatedPositionY, {
                            toValue: _this2.positionY,
                            duration: 100
                        }).start();
                    }
                    if (_this2.props.imageHeight * _this2.scale > _this2.props.cropHeight) {
                        var verticalMax = (_this2.props.imageHeight * _this2.scale - _this2.props.cropHeight) / 2 / _this2.scale;
                        if (_this2.positionY < -verticalMax) {
                            _this2.positionY = -verticalMax;
                        } else if (_this2.positionY > verticalMax) {
                            _this2.positionY = verticalMax;
                        }
                        react_native_1.Animated.timing(_this2.animatedPositionY, {
                            toValue: _this2.positionY,
                            duration: 100
                        }).start();
                    }
                    if (_this2.scale === 1) {
                        _this2.positionX = 0;
                        _this2.positionY = 0;
                        react_native_1.Animated.timing(_this2.animatedPositionX, {
                            toValue: _this2.positionX,
                            duration: 100
                        }).start();
                        react_native_1.Animated.timing(_this2.animatedPositionY, {
                            toValue: _this2.positionY,
                            duration: 100
                        }).start();
                    }
                    _this2.horizontalWholeOuterCounter = 0;
                    if (_this2.longPressTimeout) {
                        clearTimeout(_this2.longPressTimeout);
                    }
                },
                onPanResponderTerminate: function onPanResponderTerminate(evt, gestureState) {}
            });
        }
    }, {
        key: "handleLayout",
        value: function handleLayout(event) {}
    }, {
        key: "reset",
        value: function reset() {
            this.scale = 1;
            this.animatedScale.setValue(this.scale);
            this.positionX = 0;
            this.animatedPositionX.setValue(this.positionX);
            this.positionY = 0;
            this.animatedPositionY.setValue(this.positionY);
        }
    }, {
        key: "render",
        value: function render() {
            var animateConf = {
                transform: [{
                    scale: this.animatedScale
                }, {
                    translateX: this.animatedPositionX
                }, {
                    translateY: this.animatedPositionY
                }]
            };
            return React.createElement(react_native_1.View, __assign({ style: [image_zoom_style_1.default.container, { width: this.props.cropWidth, height: this.props.cropHeight }] }, this.imagePanResponder.panHandlers), React.createElement(react_native_1.Animated.View, { style: animateConf }, React.createElement(react_native_1.View, { onLayout: this.handleLayout.bind(this), style: { width: this.props.imageWidth, height: this.props.imageHeight } }, this.props.children)));
        }
    }]);
    return ImageViewer;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImageViewer;
ImageViewer.defaultProps = new typings.Props();