import React, { Component } from 'react';
import {StyleSheet,View,SafeAreaView,Text,TouchableOpacity} from 'react-native';


  export class Card extends Component {
   render(){
              return (
                <View style={styles.container}>
                   <TouchableOpacity style={styles.card}>
                       <Text style={styles.cardText}>Card  </Text>
                   </TouchableOpacity>
               </View>
        
                )
          }
      }    

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        backgroundColor:'#fff'
      },
      
    card:{
        marginRight:20,
        marginLeft:20,
        backgroundColor:'#F6F6EE',
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
     cardText:{
         height:100,
         width:100,
            padding:10,
            fontSize:15
     }
    
})