import Taro, { Component } from '@tarojs/taro'
import { View, Text,Input,Button } from '@tarojs/components'
import './index.less'
import Head from '../../components/head/head'
import Food from '../../components/food/food'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props){
    super(props);
    this.state = {
      mobile:''
    }
  }
  componentWillMount () { }

  componentDidMount () { 

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className="login-page" id="login-page">
        <Head/>
        <Food/>
      </View>
    )
  }
}

