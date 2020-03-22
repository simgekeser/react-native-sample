import React,{Component} from 'react';
import { Text, View,SafeAreaView,StyleSheet,TextInput,Image} from 'react-native';
import {IMAGE} from '../constants/images';

export class Search extends Component {
   
  render() {
    let {searchHint} = this.props
        return (      
            <View style={styles.SectionStyle}>
                   <Image
                      style={styles.ImageStyle}
                      source={IMAGE.icon_seach}
                      resizeMode="contain"
                      />
  
                <TextInput
                    style={{ flex: 1 }}
                    placeholder={searchHint}
                    underlineColorAndroid="transparent"
                />
            </View>
           
        );
  }
}
const styles = StyleSheet.create({
  
    SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DEDCDA',
      height: 40,
      borderRadius: 12,
      margin: 20,
     
  },
  ImageStyle: {
      padding: 10,
      margin: 5,
      height: 20,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'center',
  }
  })