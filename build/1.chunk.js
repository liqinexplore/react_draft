webpackJsonp([1],{

/***/ 1511:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(80);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(110);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _action = __webpack_require__(1512);

	var _reactRedux = __webpack_require__(1351);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// 引入connect
	var Circle = function (_React$Component) {
	    _inherits(Circle, _React$Component);

	    function Circle() {
	        _classCallCheck(this, Circle);

	        return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
	    }

	    _createClass(Circle, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var a = "李钦";
	            var circleState = this.props.circleState;

	            circleState(a);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    '\u6211\u662F\u5929\u771F'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    this.props.circleStatenei.params.data
	                )
	            );
	        }
	    }]);

	    return Circle;
	}(_react2.default.Component);

	var propertys = function propertys(state) {
	    return { circleStatenei: state.rootData.circle };
	};
	Circle = (0, _reactRedux.connect)(propertys, { circleState: _action.circleState })(Circle);
	module.exports = Circle;

/***/ },

/***/ 1512:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.circleState = circleState;
	function circleState(params) {

	  return function (dispatch, getState) {
	    console.log("params", params);
	    dispatch(getOperationList(params));
	  };
	}

	var getOperationList = exports.getOperationList = function getOperationList(data) {
	  console.log("data", data);
	  var ADD_TODO = 'ADD_TODO_TILL';
	  return {
	    type: ADD_TODO,
	    data: data
	  };
	};

/***/ }

});