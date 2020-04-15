import * as React from 'react';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomDrawerContent} from './src/components'
import {HomeScreen,TakvimScreen,AramaScreen, IsbirligiScreen, ProfilScreen, DetailPage} from './src/tab'
import {LoginScreen} from './src/auth'
import {IMAGE} from './src/constants/images'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const StackApp = createStackNavigator();

const navOptionHandler = () => ({
    headerShown:false
})

function TakvimStack(){
  return(
    <Stack.Navigator initialRouteName="Takvim">
      <Stack.Screen name = "TakvimScreen" component={TakvimScreen} options={navOptionHandler}/>
      <Stack.Screen name = "DetailPage" component={DetailPage} options={navOptionHandler}/>
    </Stack.Navigator>
  )
}
function HomeStack(){
  return(
    <Stack.Navigator initialRouteName="Anasayfa">
      <Stack.Screen name = "HomeScreen" component={HomeScreen} options={navOptionHandler}/>
      <Stack.Screen name = "DetailPage" component={DetailPage} options={navOptionHandler}/>
    </Stack.Navigator>
  )
}
function TabNavigator(){
  return(
  <Tab.Navigator 
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
         // console.log(route.params.data);
          
          if (route.name === 'Anasayfa') {
            iconName = IMAGE.icon_anasayfa;
          } else if (route.name === 'Takvim') {
            iconName = IMAGE.icon_takvim;
          }else if(route.name == 'Arama'){
            iconName = IMAGE.icon_arama;
           }else if(route.name == 'Isbirligi'){
            iconName = IMAGE.icon_isbirligi;
           }else {
            iconName = IMAGE.icon_profile;
           }

          // You can return any component that you like here!
          return <Image source ={iconName}
                resizeMode="contain"/>;
        },
      })}
      
      tabBarOptions={{
        style: {
          height: 80,
          padding:10
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'black',
      }}>
       
        <Tab.Screen name="Anasayfa" component={HomeStack}/>  
        <Tab.Screen name ="Takvim" component={TakvimStack} />
        <Tab.Screen name ="Isbirligi" component={IsbirligiScreen} />
        <Tab.Screen name ="Arama" component={AramaScreen} />    
        <Tab.Screen name="Profil" component={ProfilScreen}/>
      </Tab.Navigator>
  )
}
  function DrawerNavigator({navigation}){
return(
  <Drawer.Navigator initialRouteName="MenuTab"
       drawerContent = {() => <CustomDrawerContent navigation={navigation}/> }>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />  
      </Drawer.Navigator>
)
}  

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="LoginScreen">
        <StackApp.Screen name = "LoginScreen" component={LoginScreen} options={navOptionHandler}/>
        <StackApp.Screen name = "HomeApp" component={DrawerNavigator} options={navOptionHandler} 
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}