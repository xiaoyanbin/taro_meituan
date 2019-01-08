import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './top.less'
class Top extends Component{
    render(){
        return (<View className="top">
        <View className="left">
          <Image className="img" src={require("../../assets/imgs/back.png")} />
        </View>
        <View className="right">
        <Image className="img" src={require("../../assets/imgs/search.png")} />
        <Image className="img" src={require("../../assets/imgs/collect.png")} />
        <Image className="img" src={require("../../assets/imgs/mone.png")} />
        <Image className="img" src={require("../../assets/imgs/tuan.png")} />
        </View>    
        </View>)
    }
}
export default Top;