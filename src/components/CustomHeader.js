import React,{Component} from 'react';
import {View,Image} from 'react-native';
import {IMAGE} from '../constants/images'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';


export class CustomHeader extends Component {
    render(){
        let {isHome ,navigation} = this.props
        return(

   <View style ={{flexDirection: 'row',height:70,backgroundColor:"white"} }>
     <View style= {{flex:1,justifyContent: "center",marginLeft:15,marginTop:15,alignItems:"flex-start"}}>
      {
         isHome?
        <TouchableOpacity  onPress={() => navigation.openDrawer()}>
               <Button icon={
                            <Icon
                                name="menu"
                                size={40}
                                color="#B83A23"/>}  
                       type="clear"                     
                     />
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => navigation.goBack()}>
             <Button icon={
                            <Icon
                                name="arrow-back"
                                size={40}
                                color="#B83A23"/>}  
                       type="clear"                     
                     />
        </TouchableOpacity>
       }
     </View>
     <View style={{ flex:1,justifyContent: "center",alignItems:"center"}}>
              <Image style={{width:"100%",height:"100%"}}
                    source ={IMAGE.icon_title}
                    resizeMode="contain"/>
          </View> 
      <View style = {{flex:1,justifyContent: "center",marginRight:10,marginTop:5,alignItems:"flex-end"}}>
      <TouchableOpacity >
             <Button icon={
                            <Icon
                                name="attachment"
                                size={40}
                                color="#B83A23"/>}  
                       type="clear"                     
                     />
        </TouchableOpacity>

      </View>
  </View>
    
        );
    }
}