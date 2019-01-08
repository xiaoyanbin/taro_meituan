import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './footlist.less';
class FoodList extends Component{
    constructor(){
        super(...arguments);
        this.state={
        };
    }
    render(){
        let {currentList, selectCata } = this.props;
       
        return (<View className="foodlist">
           <Text className="cata_name">{selectCata?selectCata.name:""}</Text>
           <View className="foodlist_forlist">
           {
              currentList.map((item,index)=>{
                  return (<View key={item.id} className="foodlist_item">
                            <Image className="foodlist_item_img" src={item.img==2?require('../../assets/imgs/2.jpg'):require('../../assets/imgs/1.jpg')}></Image>
                            <View className="foodlist_item_info">
                            <Text >{item.title}</Text>
                            <Text>月售：{item.sole}</Text>
                            <Text>￥{item.price}</Text>
                            </View>   
                  </View>)
              }) 
           }
           </View>
        </View>)
    }
}
export default FoodList;