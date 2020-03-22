import React,{Component} from 'react';
import { Text, View,SafeAreaView} from 'react-native';
import {CustomHeader,Search,Card} from '../components';

export class HomeScreen extends Component {


    render(){
     
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor:'white'}}>
              <CustomHeader isHome={true} navigation={this.props.navigation}/>          
               <Search searchHint={"Etkinlik,duyuru ve acil durum mesajı..."}/>
               <Card/>
             </SafeAreaView>
          );
    }
    
}

