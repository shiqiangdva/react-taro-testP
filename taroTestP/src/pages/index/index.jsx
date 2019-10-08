import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    name: 'xxx'
  }

  componentWillMount () {
    console.log('页面第一次渲染前执行, 只执行一次');
   }

  componentDidMount () {
    console.log('页面第一次渲染后执行, 只执行一次');
    // this.state.name = '这是错误的写法'
    // this.setState.name = '这样行不? 也不行!'
    this.setState({name: '这样写肯定行!'});
   }

  componentWillUnmount () {
    console.log('卸载时执行, 只执行一次');
   }

   shouldComponentUpdate() {
    // 检查此次setState是否要进行render调用
    // 返回false不进行render调用更新页面
    return false;
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

  render () {
    return (
      <View className='index'>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}
