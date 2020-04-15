import React, { Component } from 'react';
import {StyleSheet,SafeAreaView,ActivityIndicator} from 'react-native';
import { Text,Thumbnail,View } from 'native-base';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CustomHeader} from '../components';
const TOKEN = 'token';

export class DetailPage extends Component {
    constructor(props){
        super(props)
        this.state={
            token:"",
            emergencyItems:[]
        }
    }
    async getEmergencyAnnouncement() {
        const value = await AsyncStorage.getItem(TOKEN)
     
    let request = {
        method: "GET",
        headers: {
        'Content-Type': "application/json",
        'Authorization': value,
        'AssociationId':'af2a4633-f098-4603-8209-457ec119301d'
        }
    };     
     fetch("https://omid.ekinoks.io/api/v1/member-emergency-announcements/"+this.props.route.params.item.id, request)
        .then(response => {
        //  console.warn("json",response.json());
          return response.json();
        })
    
        .then(result =>{console.log("result",result.data)
          this.setState({emergencyItems:result.data})
      })
        .catch(error => {
          console.error(error);
        });
    }
    render(){        
        const { item } = this.props.route.params;

        if(item.type==="emergencyAnnouncement"){            
            this.getEmergencyAnnouncement()
            if(this.state.emergencyItems.length===0){       
                return(
                  <SafeAreaView style={{ flex: 1,backgroundColor:"white"}}>
                  <CustomHeader navigation={this.props.navigation}/>       
                      <View style={styles.loader}>
                        <ActivityIndicator size="large"/>
                      </View>
                  </SafeAreaView>
                )
              }
            return (
                <SafeAreaView style={{ flex: 1 ,backgroundColor:"white"}}>
                  <CustomHeader navigation={this.props.navigation}/>
                      <View style={{ justifyContent: 'center', alignItems: 'center',backgroundColor:"white" }}>
                                <View style={{flexDirection:"column"}}>
                                    <Text style={styles.cardTitle}>{this.state.emergencyItems.announcementTitle}  </Text>
                                    <View>
                                    {this.state.emergencyItems.photo!=null ?
                                        <View style={{flexDirection:"column"}}>
                                            <Thumbnail  style={styles.cardImage} square large source={{uri: 'data:image/png;base64,'+this.state.emergencyItems.photo}} />
                                            <Text note style={{padding:20, fontSize:18,fontWeight:"bold"}}>{this.state.emergencyItems.memberName}</Text>
                                            <Text note style={styles.cardTextOverdue}>{this.state.emergencyItems.announcementText}</Text>
                                        </View>      
                                    :
                                        <View style={{flexDirection:"column"}}>
                                            <Text note style={{padding:20, fontSize:18,fontWeight:"bold"}}>{this.state.emergencyItems.memberName}</Text>
                                            <Text note style={styles.cardTextOverdue}>{this.state.emergencyItems.announcementText}</Text>                                            
                                        </View>
                                    }    
                                </View>
                                </View> 
                    </View>
                 </SafeAreaView>
              );
           
        }else{
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:"white" }}>
               <CustomHeader navigation={this.props.navigation}/>
                   
                           {item.image!=null ?
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"white" }}>
                                <View style={{flexDirection:"column"}}>
                                   <Text style={styles.cardTitle}>{item.title}  </Text> 
                          
                                    <View>
                                        <Thumbnail  style={styles.cardImage} square large source={{uri: 'data:image/png;base64,'+item.image}} />
                                    </View>
                                    <Text note style={styles.cardTextOverdue}>{item.text}</Text> 
                                    <View style={{flexDirection:"row" ,flex:3,paddingTop:15}}>
                                        <View style={{flexDirection:"column",flex:1,alignItems:"flex-start"}}>
                                            <Text style={styles.timeAndPlace}> Zaman</Text>
                                              <Text note style={{paddingLeft:20,fontSize:15}}>{item.date}</Text>
                                        </View>
                                        <View style={{flexDirection:"column",flex:2,alignItems:"flex-start"}}>
                                            <Text style={styles.timeAndPlace}> Yer </Text>
                                             <Text note style={{paddingLeft:25,fontSize:15}}>
                                                 {item.address},{item.cityName},{item.countryName}</Text>
                                        </View>
                                    </View>
                                    {item.overdue ? 
                                        <View style={{flexDirection:"row",flex:3,marginRight:10}}>
                                        <View style={{flexDirection:"row",justifyContent:"center",flex:1}}>
                                                <Button buttonStyle={styles.butonFirst}
                                                        icon={
                                                            <Icon
                                                            name="clear"
                                                            size={25}
                                                            color="#595959"
                                                            />
                                                        }  
                                                        type="clear"  
                                                        title="Hayır"
                                                        titleStyle={{color:"#595959",fontSize:18}}                   
                                                        />
                                                            
                                        </View>
                                            <View style={{flexDirection:"row",justifyContent:"center",flex:1}}>
                                                    <Button buttonStyle={styles.butonMiddle}
                                                        icon={
                                                            <Icon
                                                            name="access-alarm"
                                                            size={25}
                                                            color="white"
                                                            />
                                                        }  
                                                        type="clear"        
                                                        title="Hatırlat!"
                                                        titleStyle={{color:"white",fontSize:18}}             
                                                    />
                                            </View>
                                        
                                        
                                        <View style={{flexDirection:"row",justifyContent:"center",flex:1,marginLeft:10}}>
                                                <Button buttonStyle={styles.butonLast}
                                                    icon={
                                                        <Icon
                                                        name="done"
                                                        size={25}
                                                        color="white"
                                                        />
                                                    }  
                                                    type="clear" 
                                                    title="Katılacağım"
                                                    titleStyle={{color:"white",fontSize:18}}                
                                                />
                                            </View>
                                            
                                        </View>
                                    :null}
                                </View> 
                         </View> 
                               : 
                                  <View style={{flexDirection:"column",backgroundColor:"white"}}>
                                        <Text style={styles.cardTitle}>{item.title}  </Text>
                                        <Text note style={styles.cardTextOverdue}>{item.text}</Text>
                                    </View> 
                                } 
             </SafeAreaView>
          );
                                            }
    }
}
const styles = StyleSheet.create({

container: {
    backgroundColor:'#fff'
},

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
    height:200,
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
    padding:25,
    fontSize:25
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
    padding:20,  
    fontSize:15
},
butonFirst:{
    width:"100%",
    backgroundColor:"#D1D1D1",
    borderRadius:25,
    height:35,
    alignItems:"center",
    justifyContent:"center",
},
butonMiddle:{
    width:"100%",
    backgroundColor:"#FFAD00",
    borderRadius:25,
    height:35,
    alignItems:"center",
    justifyContent:"center",
},
butonLast:{
    width:"100%",
    backgroundColor:"#297B4E",
    borderRadius:25,
    height:35,
    alignItems:"center",
    justifyContent:"center",

},
loader:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}
})