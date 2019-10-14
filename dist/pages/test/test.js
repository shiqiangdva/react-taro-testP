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

var Test = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Test, _BaseComponent);

  function Test() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "list"], _this.config = {
      navigationBarTitleText: '测试页面'
    }, _this.state = {
      list: [{ id: 1, name: '我是item1' }, { id: 2, name: '我是item2' }, { id: 3, name: '我是item3' }, { id: 4, name: '我是item4' }, { id: 5, name: '我是item5' }, { id: 6, name: '我是item6' }, { id: 7, name: '我是item7' }, { id: 8, name: '我是item8' }]

      // 测试跳转按钮事件
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Test, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Test.prototype.__proto__ || Object.getPrototypeOf(Test.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }

    // eslint-disable-next-line react/sort-comp

  }, {
    key: "handleBtn",
    value: function handleBtn() {
      var tmp = '老王';
      var id = '123456';
      // 注意: 在app.jsx中定义的路由路径不代表可以直接复制粘贴,
      // 进行路由跳转时需要根据当前路径来配置路由路径,同时不能添加文件后缀会报错.
      //   Taro.navigateTo({url: '../index/index'})
      // redirectTo与navigateTo的不同之处在于redirectTo没有堆栈直接进行替换,也就是页面无法通过返回来回到上一个页面
      _index2.default.redirectTo({ url: "../index/index?tmp=\u8001\u738B&id=123456" });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var anonymousState__temp = "/img/img-meinv.jpg";
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Test;
}(_index.Component), _class.$$events = ["handleBtn"], _class.$$componentPath = "pages/test/test", _temp2);
exports.default = Test;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Test, true));