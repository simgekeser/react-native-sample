import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Text,Thumbnail,View } from 'native-base';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

  export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: [
              '#66947A',
              '#D1983B',
              '#FABB4E',
              '#7DD1B4'
            ],            
            selectedColor: '',
          };
    }
    componentDidMount() {
        this._getRandomColor()
      }
    _getRandomColor(){
        var item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
        this.setState({
          selectedColor: item,
        })
      }
    renderEmergencyAnnouncement(){
        return(
            <View style={styles.card}>  
            <Text style={styles.cardTitle}>{this.props.item.announcementTitle}  </Text>

                                <View>
                                    {this.props.item.photo!=null ?
                                        <View style={{flexDirection:"column"}}>
                                            <Thumbnail  style={styles.cardImage} square large source={{uri: 'data:image/png;base64,'+this.props.item.photo}} />
                                            <Text note style={styles.cardText}>{this.props.item.announcementText}</Text>
                                            <Text note style={styles.cardText}>{this.props.item.announcementDate}</Text>
                                        </View>      
                                    :
                                        <View style={{flexDirection:"column"}}>
                                         <Text note style={styles.cardText}>{this.props.item.announcementText}</Text> 
                                         <Text note style={styles.cardText}>{this.props.item.announcementDate}</Text>
                                        </View>
                                    }    
                                </View>
            </View>
        )
    }
 
    render(){
              return (
                <View style={styles.container}>           
                        {this.props.item.announcementTitle!=null ? this.renderEmergencyAnnouncement(): 
                           <View style={styles.card}>  
                             <Text style={styles.cardTitle}>{this.props.item.title}  </Text>
                            
                             {this.props.item.overdue && this.props.item.type==="event" ? 
                                    
                                <View style={{flexDirection:"column"}}>
                                    <View style={{flexDirection:"row"}}>
                                    <Thumbnail  style={styles.cardImageOverdue} square large source={{uri: 'data:image/png;base64,'+this.props.item.image}} />
                                        <Text note style={styles.cardTextOverdue}>{this.props.item.text}</Text> 
                                    </View>
                                    <View style={{flexDirection:"row" ,flex:3,paddingTop:15}}>
                                        <View style={{flexDirection:"column",flex:1,alignItems:"flex-start"}}>
                                            <Text style={styles.timeAndPlace}> Zaman</Text>
                                              <Text note style={{paddingLeft:20,fontSize:15}}>{this.props.item.date}</Text>
                                        </View>
                                        <View style={{flexDirection:"column",flex:2,alignItems:"flex-start"}}>
                                            <Text style={styles.timeAndPlace}> Yer </Text>
                                             <Text note style={{paddingLeft:25,fontSize:15}}>
                                                 {this.props.item.address},{this.props.item.cityName},{this.props.item.countryName}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:"row",flex:2,margin:10}}>
                                      <View style={{flexDirection:"row",flex:1}}>
                                        <Button buttonStyle={styles.butonFirst}
                                                icon={
                                                    <Icon
                                                    name="clear"
                                                    size={25}
                                                    color="#595959"
                                                    />
                                                }  
                                                type="clear"                     
                                                />
                                                <Button buttonStyle={styles.butonMiddle}
                                                icon={
                                                    <Icon
                                                    name="access-alarm"
                                                    size={25}
                                                    color="white"
                                                    />
                                                }  
                                                type="clear"                     
                                            />
                                      </View>
                                      
                                      <View style={{flexDirection:"row",flex:1}}>
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
                        
                                </View>  
                                   
                             : 
                                 <View>
                                 {this.props.item.image!=null ?
                                        <View>
                                            <Thumbnail  style={styles.cardImage} square large source={{uri: 'data:image/png;base64,'+this.props.item.image}} />
                                            <Text note style={styles.cardText}>{this.props.item.text}</Text>
                                        </View>      
                                    :<Text note style={styles.cardText}>{this.props.item.text}</Text> }
                                </View>     
                          }  
                      </View>
                     }
               </View>
        
                )
          }
      }    

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff'
      },
     customBorder:{
        marginLeft:"6%",
        width:"30%",
        height:10,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
     }, 
    card:{
        width:'90%',
        marginRight:20,
        marginLeft:20,
        backgroundColor:'#F0F0EC',
        borderRadius:20,
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
    backgroundColor:"#E89F2D",
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