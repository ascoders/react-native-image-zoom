"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require('react');
var react_native_1 = require('react-native');
var typings = require('./image-zoom.type');
var index_1 = require('nt-auto-bind');
var image_zoom_style_1 = require('./image-zoom.style');
var ImageViewer = function (_React$Component) {
    _inherits(ImageViewer, _React$Component);

    function ImageViewer() {
        var _ref;

        _classCallCheck(this, ImageViewer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = ImageViewer.__proto__ || Object.getPrototypeOf(ImageViewer)).call.apply(_ref, [this].concat(args)));

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
        _this.centerDiffX = 0;
        _this.centerDiffY = 0;
        return _this;
    }

    _createClass(ImageViewer, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            this.imagePanResponder = react_native_1.PanResponder.create({
                onStartShouldSetPanResponder: function onStartShouldSetPanResponder(evt, gestureState) {
                    return true;
                },
                onStartShouldSetPanResponderCapture: function onStartShouldSetPanResponderCapture(evt, gestureState) {
                    return true;
                },
                onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(evt, gestureState) {
                    return true;
                },
                onMoveShouldSetPanResponderCapture: function onMoveShouldSetPanResponderCapture(evt, gestureState) {
                    return true;
                },
                onPanResponderTerminationRequest: function onPanResponderTerminationRequest(evt, gestureState) {
                    return false;
                },
                onPanResponderGrant: function onPanResponderGrant(evt, gestureState) {
                    _this2.lastPositionX = null;
                    _this2.lastPositionY = null;
                    _this2.zoomLastDistance = null;
                    _this2.lastTouchStartTime = new Date().getTime();
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
                },
                onPanResponderMove: function onPanResponderMove(evt, gestureState) {
                    if (_this2.longPressTimeout) {
                        clearTimeout(_this2.longPressTimeout);
                    }
                    if (evt.nativeEvent.changedTouches.length <= 1) {
                        if (_this2.props.panToMove) {
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
                                    _this2.horizontalWholeOuterCounter += diffX;
                                } else if (_this2.positionX > horizontalMax) {
                                    _this2.positionX = horizontalMax;
                                    _this2.horizontalWholeOuterCounter += diffX;
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
                                var distanceDiff = (_this2.zoomCurrentDistance - _this2.zoomLastDistance) / 400;
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
                    var stayTime = new Date().getTime() - _this2.lastTouchStartTime;
                    var moveDistance = Math.sqrt(gestureState.dx * gestureState.dx + gestureState.dy * gestureState.dy);
                    if (evt.nativeEvent.changedTouches.length === 1 && stayTime < _this2.props.leaveStayTime && moveDistance < _this2.props.leaveDistance) {
                        _this2.props.onCancel();
                        return;
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
            this.outerPanResponder = react_native_1.PanResponder.create({
                onStartShouldSetPanResponder: function onStartShouldSetPanResponder(evt, gestureState) {
                    return true;
                },
                onStartShouldSetPanResponderCapture: function onStartShouldSetPanResponderCapture(evt, gestureState) {
                    return false;
                },
                onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(evt, gestureState) {
                    return false;
                },
                onMoveShouldSetPanResponderCapture: function onMoveShouldSetPanResponderCapture(evt, gestureState) {
                    return false;
                },
                onPanResponderRelease: function onPanResponderRelease(evt, gestureState) {
                    _this2.props.onCancel();
                    if (_this2.longPressTimeout) {
                        clearTimeout(_this2.longPressTimeout);
                    }
                }
            });
        }
    }, {
        key: "handleLayout",
        value: function handleLayout(event) {
            this.centerX = event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2;
            this.centerY = event.nativeEvent.layout.y + event.nativeEvent.layout.height / 2;
        }
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
            return React.createElement(react_native_1.View, __assign({ style: [image_zoom_style_1.default.container, { width: this.props.cropWidth, height: this.props.cropHeight }] }, this.outerPanResponder.panHandlers), React.createElement(react_native_1.Animated.View, { style: animateConf }, React.createElement(react_native_1.View, __assign({ onLayout: this.handleLayout, style: { width: this.props.imageWidth, height: this.props.imageHeight } }, this.imagePanResponder.panHandlers), this.props.children)));
        }
    }]);

    return ImageViewer;
}(React.Component);
ImageViewer.defaultProps = new typings.Props();
ImageViewer = __decorate([index_1.autoBindClass], ImageViewer);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImageViewer;