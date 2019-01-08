import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import Cata from './cata'
import FoodList from './foodlist';
// import {AtTabs, AtTabsPane } from 'taro-ui'
import './food.less'
class Food extends Component{
    constructor(){
        super(...arguments);
        this.state={
            current:0,
            tabList:[{title:"点菜"},{title:"评价"}],
            foodlist:[],
            currentList:[],
            selectCata:{}
        }
    }
    componentDidMount () { 
        
    }
    handleClick(value){
        this.setState({
            current: value
          })
    }
    //切换分类
    changeCata(selectCata){
        this.setState({selectCata:selectCata})
        if(this.state.foodlist.some(item=>item.pid==selectCata.id)){
             //不用加载数据
             
            this.setState({currentList:this.state.foodlist.filter(item=>item.pid==selectCata.id)})
        }else{
            this.setState({foodlist:this.state.foodlist.concat(this.getData(selectCata))},()=>{
                this.setState({currentList:this.state.foodlist.filter(item=>item.pid==selectCata.id)})
            })
        }
    }
    getData(selectCata){
        let count=Math.round(Math.random()*2);
        let imgurl=`../../assets/imgs/${count}.jpg`;

        return Array.from(Array(Math.round(Math.random()*20)),(v,k)=>
            ({  price:Math.round(Math.random()*20),
                sole:Math.round(Math.random()*50),
                img:count,
                pid:selectCata.id,
                id:selectCata.id+"_"+k,
                title:"分类"+selectCata.id+"菜品"+(k+1)
            })
        )
         
    }
    render () {
        let {current,currentList,selectCata}=this.state;
        const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
        return (
            <View className="food_body">
                 <Cata onChangeCata={this.changeCata.bind(this)} />
                 <FoodList selectCata={selectCata}  currentList={currentList} />
            </View>
          )    
      }
}
export default Food;