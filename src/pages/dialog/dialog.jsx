import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

class Dialog extends Component {
    // this.props.children通过这样传递调用class向子class传递HTML内容
    render() {
        return(
        <View>
            我是Dialog, propsChildren内容是:{this.props.children}
            {/* 因为Taro中不能对this.props.children进行操作,拆解等. 所以当需要对在子组件中进行条件判断筛选时
            需要自定义props属性,例如如下事件 */}
            {this.props.renderTs}
        </View>
        )
    }
}

// Dialog.defaultProps = {
//     // ttp={<Image src={require('../../img/img-meinv.jpg')}></Image>}
//     ttp: <Image src={require('../../img/img-meinv.jpg')}></Image>
// }

export default Dialog;