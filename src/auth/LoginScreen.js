import React,{Component} from 'react';
import { Text, View,SafeAreaView,StyleSheet,TextInput,Image,ScrollView } from 'react-native';
import {IMAGE} from '../constants/images'
import { TouchableOpacity } from 'react-native-gesture-handler';


export class LoginScreen extends Component {
    state={
      email:"",
      password:""
    }
    render(){
      return (     
          <SafeAreaView style={{ flex: 1,backgroundColor:"white"}}>
              
              <View style ={{flexDirection: 'row', height:70} }>
                    <View style={{ flex: 1, justifyContent: 'center',alignItems:"center"}}>
                        <Image
                              source ={IMAGE.icon_title}
                              resizeMode="contain"/>
                        </View>
              </View>
              
            <View style={styles.container}>
                    
                   <View style={{marginBottom:30}}>
                   <Text style={styles.text}>MERHABA</Text>
                    <Text style={styles.text}>HOCAM</Text>           
            
                     </View> 
                   
                    <View style={styles.inputView} > 
                          <TextInput             
                            placeholder="TC Kimlik No" 
                            onChangeText={text => this.setState({email:text})}/>      
                    </View>
                            
              <View style={styles.inputView} >
                      <TextInput  
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Şifre" 
                        onChangeText={text => this.setState({password:text})}/>
              </View>
          
              <View  style ={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('HomeApp')}>
                        
                      <Text style={styles.loginText}>GİRİŞ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.forgot}>Şifremi Unuttum!</Text>
                    </TouchableOpacity>         
              </View>
          </View>
              
       </SafeAreaView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:100,
      justifyContent: 'center',
    },
    text:{
      marginLeft:25,
      fontSize:35,
      justifyContent:"center",
      color:"black",
    },
    inputView:{
      height:40,
      borderBottomWidth:1,
      margin:15,
      justifyContent:"center",
      
    },
    inputText:{
      height:50,
      color:"black",
      position:"absolute"
    },
    forgot:{
      color:"red",
      fontSize:11
    },
    loginBtn:{
      width:200,
      backgroundColor:"#638776",
      borderRadius:8,
      height:40,
      alignItems:"center",
      justifyContent:"center",
      marginTop:60,
      marginBottom:10
    },
    loginText:{
     fontFamily:"bold",
      color:"white"
    }
  });

  