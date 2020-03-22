import React,{Component} from 'react';
import { Text, View,SafeAreaView,Image,ScrollView } from 'react-native';
import {CustomHeader} from '../components';


export class TakvimScreenDetail extends Component {
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader navigation={this.props.navigation}/>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"white" }}>
              <Text>takvimDetail!</Text>
                </View>
             </SafeAreaView>
          );
    }
}