import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Text,View } from 'native-base';
import Moment from 'moment';
import 'moment/locale/tr'  

export class CardTakvim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: [
              '#66947A',
              '#D1983B',
              '#FABB4E',
              '#7DD1B4'
            ],            
            selectedColor: '#66947A',
          };
    }
   
  componentDidMount() {
    this.getRandomColor()
  }
  getRandomColor(){
    var item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
    this.setState({
      selectedColor: item,
    })
  }
   render(){
       
        if(this.props.item.type === 'event'){
          Moment.locale('tr'); 
          let date = Moment(this.props.item.date, 'DD-MM-YYYY HH: mm: ss').format('Do MMMM YYYY');
          let time = Moment(this.props.item.date, 'DD-MM-YYYY HH: mm: ss').format('HH:mm')
         
             // console.log("date",date)   
              // alert(date);
           
            
                return(    
                <View style={styles.card}>                  
                    <View style={{marginLeft:"6%"}}>
                        <Text style={{
                            width:"40%",
                            height:10,
                            borderBottomLeftRadius:5,
                            borderBottomRightRadius:5,
                            backgroundColor:this.state.selectedColor
                            }}></Text>
                                 
                            <Text style={styles.cardTitle}>{date+" , "+this.props.item.title}  </Text>      
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{fontSize:18, fontWeight:'bold',color:"grey"}}>Saat:  </Text>
                                    <Text note style={{fontSize:18,paddingBottom:20}}>{time}</Text>
                                </View> 
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{fontSize:18, fontWeight:'bold',color:"grey"}}>Yer:  </Text>
                                    <Text note style={{fontSize:18,paddingBottom:20,paddingLeft:15}}>
                                   {this.props.item.address},{this.props.item.cityName},{this.props.item.countryName}</Text>
                                </View> 
                    </View>                    
              </View>
    )} else{
        return(null)
    }}
       
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
        paddingBottom:10,
        paddingTop:10,
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