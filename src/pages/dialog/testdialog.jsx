import { Component } from "@tarojs/taro";
import { View, Image, Button } from "@tarojs/components";
import Dialog from "./dialog";

export default class TestDialog extends Component {
    render() {
        return(
        <View>
            <Dialog><Text>1.我是文本啦啦啦</Text></Dialog>
            <Dialog>2.<Image src={require('../../img/img-meinv.jpg')}></Image></Dialog>
            <Dialog>3.<Button>我是按钮~</Button></Dialog>

            {/* 注意: 查阅了一下官方文档, 把自己自定义的属性名字换成renderXxx(Xxx是随意名,且必须为驼峰结构),
             以这样的形式定义属性名才能够通过props传递组件, 而起其他的名字就会报上面的错误, 一个坑 */}
            <Dialog renderTs={<Image src={require('../../img/img-meinv.jpg')}></Image>}>
                <Image src={require('../../img/img-meinv.jpg')}></Image>
            </Dialog>
        </View>
        )
    }
}