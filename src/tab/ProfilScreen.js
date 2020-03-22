import React,{Component} from 'react';
import { Text, View,SafeAreaView} from 'react-native';
import {CustomHeader} from '../components';


export class ProfilScreen extends Component {
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader isHome={true} navigation={this.props.navigation}/>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"white" }}>
              <Text>Profil!</Text>
                </View>
             </SafeAreaView>
          );
    }
}