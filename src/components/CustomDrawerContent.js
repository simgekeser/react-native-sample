import React,{Component} from 'react';
import { Text, View,SafeAreaView,Image,ScrollView ,TouchableOpacity} from 'react-native';
import {IMAGE} from '../constants/images'

export class CustomDrawerContent extends Component {
    render(){
            return(
                <SafeAreaView style ={{flex:1 }}>
                <View style ={{height:150,alignItems:'center',justifyContent:'center'}}>
                <Image
                    style={{width: 120, height: 120,marginTop:50}}
                    source={IMAGE.icon_user}
                    resizeMode="contain"
                    />
                </View>
                    <ScrollView style ={{marginLeft:20}}>
                    <TouchableOpacity style={{marginTop:50}}>
                        <Text>Menutab</Text>
                    </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
            )
    }
}