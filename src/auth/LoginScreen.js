import React,{Component} from 'react';
import { View,SafeAreaView,StyleSheet,Alert,ActivityIndicator,Button } from 'react-native';
import { authorize } from 'react-native-app-auth';
import AsyncStorage from '@react-native-community/async-storage';

  const config = {
    issuer: 'https://omid.plusauth.com',
    clientId: '1oz0dM9KlK9kBhdCYJYovg_8XPdZ_GtZ307FPru34wAIUZme',
    redirectUrl: 'com.plusauth.demo:/oauthredirect', 
    scopes: [  
      'openid', 
      'profile', 
      'email', 
      'offline_access' 
  ],
 
  };
    
export class LoginScreen extends Component {
   constructor(props){
     super(props);
     this.state={
      acces:false,
      Token:""
     }
   }
   
   async getData(){
    try {
     //console.log("Login");
       const result = await authorize(config) 
     //  console.log("Token",result.idToken)
     //  console.log("TokenType",result.tokenType)      
       this.setState({acces:true,Token:result.idToken})
    
       await AsyncStorage.setItem(TOKEN, `${result.idToken}`);
      {this.state.acces == true ? this.props.navigation.navigate('HomeApp'): console.log("fsdf")} 
  
    }catch(error){
        Alert.alert('Failed to log in', error.message);
      } 
}
    render(){
      if(this.state.acces == true){
        return(
          <SafeAreaView style={{ flex: 1, backgroundColor:'white'}}>
              <View style={styles.loader}>
                <ActivityIndicator size="large"/>
              </View>
          </SafeAreaView>
        )}
      return (  
        <SafeAreaView style={{ flex: 1,backgroundColor:"white",justifyContent:"center", alignContent:"center",}}>          
                            
              <View style={styles.buttonContainer}>
                  <Button onPress={() => this.getData()} title="GİRİŞ" />
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
   loader:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
    buttonContainer: {
      padding: 10,
      shadowColor: '#000000',
      margin:80,
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
      backgroundColor:"#638776",
      borderRadius:8,
      
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

  export const TOKEN = 'token';