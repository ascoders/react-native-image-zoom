"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PropsGaea = function PropsGaea() {
    _classCallCheck(this, PropsGaea);

    this.gaeaName = '图片手势操作';
    this.gaeaIcon = 'square-o';
    this.gaeaUniqueKey = 'nt-image-zoom';
};

exports.PropsGaea = PropsGaea;

var Props = function (_PropsGaea) {
    _inherits(Props, _PropsGaea);

    function Props() {
        var _ref;

        _classCallCheck(this, Props);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Props.__proto__ || Object.getPrototypeOf(Props)).call.apply(_ref, [this].concat(args)));

        _this.onCancle = function () {};
        _this.onLongPress = function () {};
        _this.panToMove = true;
        _this.pinchToZoom = true;
        _this.cropWidth = 100;
        _this.cropHeight = 100;
        _this.imageWidth = 100;
        _this.imageHeight = 100;
        _this.source = '';
        _this.longPressTime = 800;
        _this.leaveStayTime = 100;
        _this.leaveDistance = 10;
        _this.maxOverflow = 100;
        _this.horizontalOuterRangeOffset = function () {};
        _this.responderRelease = function () {};
        return _this;
    }

    return Props;
}(PropsGaea);

exports.Props = Props;

var State = function State() {
    _classCallCheck(this, State);

    this.centerX = 0.5;
    this.centerY = 0.5;
};

exports.State = State;