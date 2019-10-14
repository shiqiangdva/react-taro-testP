import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';

export default class Test extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '测试页面'
  };

  render() {
    return <View className="index">
        Test
      </View>;
  }
}