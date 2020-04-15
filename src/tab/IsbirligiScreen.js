import { Text, View,SafeAreaView,FlatList,StyleSheet, ActivityIndicator} from 'react-native';
import {CustomHeader,Search,Card} from '../components';
import AsyncStorage from '@react-native-community/async-storage';
import React,{Component} from 'react';
const TOKEN = 'token';

export class IsbirligiScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            token: '',
            items:[]
          }; 
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
     fetch("https://omid.ekinoks.io/api/v1/association-announcements/", request)
        .then(response => {
        //  console.warn("json",response.json());
          return response.json();
        })
    
        .then(result =>{console.log("result",result.data)
          this.setState({items:result.data})
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
                renderItem={({item})=> <View >
                <Card item={item}/> 
                <Text >{item.key}</Text>
           </View>}/>
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
      justifyContent:'center'},
      
    card:{
        width:'90%',
        marginRight:20,
        marginLeft:20,
        backgroundColor:'#F0F0EC',
        borderRadius:15,
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowRadius:10,
        elevation:5,
        shadowOffset:{
            width:3,
            height:3
        }
    },   
    cardImage :{
        width:'90%',
        marginRight:20,
        marginLeft:20,
        justifyContent:'center',
        alignContent:'center',
        height:150,
        resizeMode:'cover'
    },
    cardImageOverdue :{
        marginLeft:20,
        width:"40%",
        height:"100%",
        justifyContent:'center',
        alignContent:'center',
        resizeMode:'cover',
        borderRadius:8,
    },
     cardTitle:{
         color:"#404040",
        fontWeight:'bold', 
            padding:10,
            fontSize:17
     },
     timeAndPlace:{
        color:"#CD2D26",
       fontWeight:'bold', 
           paddingLeft:20,
           fontSize:15
    },
     cardText:{      
            padding:10,             
            fontSize:15
     },
     
     cardTextOverdue:{      
        paddingLeft:15,  
        width:"55%",
        fontSize:15
 },
 butonFirst:{
    width:"80%",
    backgroundColor:"#D1D1D1",
    borderRadius:8,
    height:"80%",
    alignItems:"center",
    justifyContent:"center",
  
  },
  butonMiddle:{
    width:"80%",
    backgroundColor:"#FFAD00",
    borderRadius:8,
    height:"80%",
    alignItems:"center",
    justifyContent:"center",
  },
  butonLast:{
    width:"100%",
    backgroundColor:"#297B4E",
    borderRadius:8,
    height:"80%",
    alignItems:"center",
    justifyContent:"center",
  
  },
})