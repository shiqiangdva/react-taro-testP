import Nerv from "nervjs";
import { Component } from "@tarojs/taro-h5";
import { View } from "@tarojs/components";

class Child extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('看这里:' + nextProps.obj[0].key);
  }
  testMethod() {
    this.props.test();
  }
  render() {
    return <View onClick={this.testMethod.bind(this)}>我是子节点,父节点传递的数据分别为:{this.props.data},
            {this.props.obj[0].key}</View>;
  }
}

// 可以通过此方式来添加 props的默认值 防止props数据没有数据没有初始化而造成错误的情况发生
Child.defaultProps = {
  obj: [{ key: '我是鸡巴默认数据!' }]
};

export default Child;

// 注意1: 原来的版本taro中, 需要设置defaultProps不然会报错, 但是新版本(目前版本不会造成报错)
// 注意2: 原来的版本taro中, 需要通过props传递方法调用时,需要在子组件中对方法进行.bind(this)操作,但是在新版本中也不会报错, 估计优化简化的代码复杂度, 但是纯react开发中是需要的
// 注意3: 原来的版本taro中, 需要对props传递方法的key前添加on来使小程序代码可运行不出错, 为了统一多平台的一套代码适配性, 所以都加on, 但是新版本也不需要了