"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Child = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Child, _BaseComponent);

  function Child() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Child);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Child.__proto__ || Object.getPrototypeOf(Child)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["test", "data", "obj"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Child, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Child.prototype.__proto__ || Object.getPrototypeOf(Child.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log('看这里:' + nextProps.obj[0].key);
    }
  }, {
    key: "testMethod",
    value: function testMethod() {
      this.props.test();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Child;
}(_index.Component), _class.$$events = ["testMethod"], _class.$$componentPath = "pages/index/child", _temp2);

// 可以通过此方式来添加 props的默认值 防止props数据没有数据没有初始化而造成错误的情况发生


// 注意1: 原来的版本taro中, 需要设置defaultProps不然会报错, 但是新版本(目前版本不会造成报错)
// 注意2: 原来的版本taro中, 需要通过props传递方法调用时,需要在子组件中对方法进行.bind(this)操作,但是在新版本中也不会报错, 估计优化简化的代码复杂度, 但是纯react开发中是需要的
// 注意3: 原来的版本taro中, 需要对props传递方法的key前添加on来使小程序代码可运行不出错, 为了统一多平台的一套代码适配性, 所以都加on, 但是新版本也不需要了

Child.defaultProps = {
  obj: [{ key: '我是鸡巴默认数据!' }]
};

exports.default = Child;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Child));