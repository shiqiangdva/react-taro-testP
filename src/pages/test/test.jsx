import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import './test.less'

export default class Test extends Component {

    // eslint-disable-next-line react/sort-comp
    config = {
        navigationBarTitleText: '测试页面'
    }

    state = {
        list: [
            {id: 1, name: '我是item1'},
            {id: 2, name: '我是item2'},
            {id: 3, name: '我是item3'},
            {id: 4, name: '我是item4'},
            {id: 5, name: '我是item5'},
            {id: 6, name: '我是item6'},
            {id: 7, name: '我是item7'},
            {id: 8, name: '我是item8'},
        ]
    }

    // 测试跳转按钮事件
    handleBtn() {
        const tmp = '老王';
        const id = '123456';
        // 注意: 在app.jsx中定义的路由路径不代表可以直接复制粘贴,
        // 进行路由跳转时需要根据当前路径来配置路由路径,同时不能添加文件后缀会报错.
        //   Taro.navigateTo({url: '../index/index'})
        // redirectTo与navigateTo的不同之处在于redirectTo没有堆栈直接进行替换,也就是页面无法通过返回来回到上一个页面
        Taro.redirectTo({ url: '../index/index?tmp=' + tmp + '&id=' + id });
    }

    render() {
        return (
            <View className='index'>
                {/* 注意taro引用图片时, 需要引用@tarojs/components中的Image, 并且在填写图片路径时, 需要用require()包裹路径 */}
                <Image src={require('../../img/img-meinv.jpg')} className='image' />
                <Button onClick={this.handleBtn}>Test跳转</Button>
                {
                    this.state.list.map((item, index) => {
                        return(<View key={index}>{item.name}</View>)
                    })
                }
            </View>
        )
    }
}
