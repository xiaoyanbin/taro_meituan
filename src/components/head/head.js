import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import Top from './top';
import Activity from './activity';
import './head.less';
class Head extends Component{
    constructor(){
        super(...arguments)
        this.state ={
            "store":{
            title:"川湘居",
            notice:"欢迎光临",
            tags:["味道","主食好吃","分量足"]
            }
        }
    }
    render(){
        let {store } = this.state;
        return (<View className="head">
            <Top/>
            <Image className="back" src={require("../../assets/imgs/timg.jpg")}></Image> 
            <View className="store">
               <Image className="store_img" src={require("../../assets/imgs/store.jpg")}> </Image>
               <View className="store_text">
               <Text>{store.title}</Text>
               <Text>{store.notice}</Text>
                <View>{store.tags.map((item,index) => <Text className="tags_text" key="index">{item}</Text>
                )}</View>
                </View>
            </View>  
            <Activity/>
        </View>)
    }
}
export default Head;