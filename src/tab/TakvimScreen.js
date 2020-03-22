import React,{Component} from 'react';
import { Text, View,SafeAreaView,TouchableOpacity } from 'react-native';
import {CustomHeader} from '../components'


export class TakvimScreen extends Component {
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
             <CustomHeader isHome={true} navigation={this.props.navigation}/>
             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"white" }}>
              <Text>Takvim!</Text>
              <TouchableOpacity
                style={{marginTop:20}}
                onPress={() => this.props.navigation.navigate('TakvimDetail')}>
              
                <Text>
                  GoTakvimDetail
                </Text>
              </TouchableOpacity>
            </View>
            </SafeAreaView>
          );
    }
}