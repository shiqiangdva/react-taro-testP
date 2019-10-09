import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Child from './child';

export default class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    name: 'xxx',
    obj: undefined
  }

  componentWillMount () {
    console.log('页面第一次渲染前执行, 只执行一次');
   }

  componentDidMount () {
    console.log('页面第一次渲染后执行, 只执行一次');
    // this.state.name = '这是错误的写法'
    // this.setState.name = '这样行不? 也不行!'
    this.setState({name: '这样写肯定行!', obj: [{key: 'xxxooo~'}]}, () => {
      // 状态变更一定是异步的,所以想要立刻取得最新值就需要回调来拿
      console.log(this.state.name+'回调.');
    });
    console.log(this.state.name+'非回调');
   }

  componentWillUnmount () {
    console.log('卸载时执行, 只执行一次');
   }

   shouldComponentUpdate(nextProps, nextState) {
    // 检查此次setState是否要进行render调用
    // 一般用来多次setState调用时,提升render的性能
    // 返回false不进行render调用更新页面
    // 参数nextProps父组件传递的数据, 参数nextState为下次更新的state数据
    if(nextState.name === '这样写肯定行!') {
      return true;
    } else {
      return false;
    }
  }

  componentWillReceiveProps(nextProps) {
    // 会在父组件传递给子组件的参数(props)发生改变时触发
  }

   componentWillUpdate() {
     console.log('state数据将要更新');
   }

   componentDidUpdate() {
    console.log('state数据更新过后');
   }



  componentDidShow () {
    // reactjs 是不存在的
    // 但是在taro中是存在的
    console.log('页面显示时触发');
  }

  componentDidHide () { 
    console.log('页面隐藏时触发');
  }

  getName() {
    return 'xxx';
  }

  methodPropsTest() {
    console.log('我是父组件的方法,我在被执行!');
  }

  render () {
    return (
      <View className='index'>
        <Text>{this.state.name}</Text>
        <Child data={this.state.name} obj={this.state.obj} test={this.methodPropsTest}></Child>
      </View>
    )
  }
}
