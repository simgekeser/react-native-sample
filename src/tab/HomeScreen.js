import { Text, View,SafeAreaView,FlatList,StyleSheet, ActivityIndicator} from 'react-native';
import {CustomHeader,Search,Card} from '../components';
import AsyncStorage from '@react-native-community/async-storage';
import React,{Component} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
const TOKEN = 'token';

export class HomeScreen extends Component {

    constructor(props){
        super(props)
        if(HomeScreen.instance){
          return HomeScreen.instance;
        }
        this.listners =[];
        this.state = {
          token: '',
          items:[]
        }; 
        HomeScreen.instance = this;
        return HomeScreen.instance;
        
    }
    getItems(){
        return this.state.items;
    } 
     async UNSAFE_componentWillMount() {
            
            const value = await AsyncStorage.getItem(TOKEN)
              this.setState({token:value});
      
        let request = {
            method: "GET",
            headers: {
            'Content-Type': "application/json",
            'Authorization': value,
            'AssociationId':'af2a4633-f098-4603-8209-457ec119301d'
            }
        };     
         fetch("https://omid.ekinoks.io/api/v1/mobile/information", request)
            .then(response => {
              return response.json();
            })
        
            .then(result =>{
              this.setState({items:result.data})
             // console.log("İtems",this.getItems())
            
          })
            .catch(error => {
              console.error(error);
            });
           
        }
    render(){
      if(this.state.items.length===0){       
        return(
          <SafeAreaView style={{ flex: 1, backgroundColor:'white'}}>
          <CustomHeader isHome={true} navigation={this.props.navigation}/>          
           <Search searchHint={"Etkinlik,duyuru ve acil durum mesajı..."}/>
              <View style={styles.loader}>
                <ActivityIndicator size="large"/>
              </View>
          </SafeAreaView>
        )
      }
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor:'white'}}>
              <CustomHeader isHome={true} navigation={this.props.navigation}/>          
               <Search searchHint={"Etkinlik,duyuru ve acil durum mesajı..."}/>
               
               <FlatList style={styles.container} data={this.state.items}
                  keyExtractor={(item,index)=> index.toString()}
                  renderItem={({item})=> <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailPage',{
                    item:item })}>
                  <Card item={item}/> 
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


export const Items = 'items';