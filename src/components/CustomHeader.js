import React,{Component} from 'react';
import { Text, View,SafeAreaView,Image,ScrollView } from 'react-native';
import {IMAGE} from '../constants/images'
import { TouchableOpacity } from 'react-native-gesture-handler';

export class CustomHeader extends Component {
    render(){
        let {isHome ,navigation} = this.props
        return(

   <View style ={{flexDirection: 'row', height:70,backgroundColor:"white"} }>
     <View style= {{flex:1,justifyContent: "center"}}>
      {
         isHome?
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{width: 30, height: 30,marginLeft:20,marginTop:20}}
            source={IMAGE.icon_menu}
            resizeMode="contain"
          />
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width:30,height:30,marginLeft:20,marginTop:10}}
            source ={IMAGE.icon_back}
            resizeMode="contain"/>
        </TouchableOpacity>
       }
    </View>
          <View style={{ flex: 1, justifyContent: 'center'}}>
              <Image
                    source ={IMAGE.icon_title}
                    resizeMode="contain"/>
          </View> 
       <View style = {{flex:1}}></View>
  </View>
    
        );
    }
}