import { Text, View,SafeAreaView,FlatList,StyleSheet, ActivityIndicator} from 'react-native';
import {CustomHeader,CardTakvim} from '../components';
import React,{Component} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeScreen } from './HomeScreen';
import Moment from 'moment';
import 'moment/locale/tr'

const sharedData = new HomeScreen();
export class TakvimScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            token: '',
            items:sharedData.getItems(),
            title:''
          }; 
    }
  
    render(){
      
    
      if(this.state.items.length===0){
        return(
          <SafeAreaView style={{ flex: 1, backgroundColor:'white'}}>
          <CustomHeader isHome={true} navigation={this.props.navigation}/>          
              <View style={styles.loader}>
                <ActivityIndicator size="large"/>

              </View>
          </SafeAreaView>
        )
      }
      Moment.locale('tr');
      let titleDate =Moment(this.state.items[0].date, 'DD-MM-YYYY HH: mm: ss').format('MMMM YYYY');
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor:'white'}}>
              <CustomHeader isHome={true} navigation={this.props.navigation}/>          
               <Text style={{marginLeft:20,marginTop:30,fontSize:30,color:'#C53619',fontWeight:"bold"}}>{titleDate}  </Text> 

               <FlatList style={styles.container} data={this.state.items}
                keyExtractor={(item,index)=> index.toString()}
                renderItem={({item})=> 
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailPage',{
                  item:item }) }>
                <CardTakvim item={item}/> 
                <Text >{item.key}</Text>
           </TouchableOpacity>}/>
           </SafeAreaView>
          );
    }
    
}
const styles = StyleSheet.create({
  container:{
    marginTop:20,
  },
  loader:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})