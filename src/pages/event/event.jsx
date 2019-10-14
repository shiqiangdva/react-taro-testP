import { Component } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
// 注意: 此方法为获取当前运行环境
// 可以根据环境不同, 来拉取不同环境的样式文件资源文件等...
const config = process.env.TARO_ENV;

class Event extends Component {

    componentWillMount() {
        console.log(config);
    }

    handleBtn(a, b, e) {
        // 注意: 事件绑定当需要传递参数时,1)需要bind(this), 2)event参数在参数的最后面
        console.log(a + ',' + b);
        // 注意: 阻止事件冒泡
        e.stopPropagation();
    }

    render() {
        return(
            <View>
                <Button onClick={this.handleBtn.bind(this, 'xxx', 'ooo')}>测试事件</Button>
            </View>
        );
    }
}

export default Event;