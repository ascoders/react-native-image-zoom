"use strict";

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropsGaea = function PropsGaea() {
    (0, _classCallCheck3.default)(this, PropsGaea);

    this.gaeaName = '图片手势操作';
    this.gaeaIcon = 'square-o';
    this.gaeaUniqueKey = 'nt-image-zoom';
};

exports.PropsGaea = PropsGaea;

var Props = function (_PropsGaea) {
    (0, _inherits3.default)(Props, _PropsGaea);

    function Props() {
        (0, _classCallCheck3.default)(this, Props);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Props.__proto__ || Object.getPrototypeOf(Props)).apply(this, arguments));

        _this.onClick = function () {};
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
        _this.onDoubleClick = function () {};
        return _this;
    }

    return Props;
}(PropsGaea);

exports.Props = Props;

var State = function State() {
    (0, _classCallCheck3.default)(this, State);

    this.centerX = 0.5;
    this.centerY = 0.5;
};

exports.State = State;