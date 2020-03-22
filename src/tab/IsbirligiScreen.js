import React,{Component} from 'react';
import { Text, View,SafeAreaView} from 'react-native';
import {CustomHeader,Search} from '../components';


export class IsbirligiScreen extends Component {
    render(){
        return (
           <SafeAreaView style={{ flex: 1 ,backgroundColor:'white'}}>
            <CustomHeader isHome={true} navigation={this.props.navigation}/>
              <Search/>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"white" }}>
               <Text>Isbirligi!</Text>
                </View>
             </SafeAreaView>
          );
    }
}