import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './activity.less'
class Activity extends Component{
    constructor(){
        super(...arguments);
        this.state={
            activity:[{
                type:"cut",
                info:[{tota:48,cut:10},{tota:58,cut:20},{tota:100,cut:50}]
            }]
        };
        this.getTextByType =  this.getTextByType.bind(this)
        this.getLine =  this.getLine.bind(this)
    }
    getLine(arr){
      return  arr.map((item,index)=>`满${item.tota}减${item.cut}`).join(";");
    }
    getTextByType(type){
        switch (type){
            case 'cut': 
            return "减"
              break;
            default:
            return "减"
            break;
        }
    }
    render(){
        let {activity:[firstItem]} = this.state;
        return (<View className="activity">
           <Text className="type">{this.getTextByType(firstItem.type)}</Text>
           <Text>{this.getLine(firstItem.info)}</Text>
           <Text className="length">{firstItem.info.length}个活动</Text>
        </View>)
    }
}
export default Activity;