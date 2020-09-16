import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen';
import Listings from './components/Listings';
import Details from './components/Details';


const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Tab.Navigator styles={styles.tabs}>
            {TabBarIcon("Home",HomeScreen,0)}
            {TabBarIcon("Listings",Listings,1)}
            {TabBarIcon("Details",Details,2)}
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
  },
  tabs:{
    paddingTop:150,

  }
})

const TabBarIcon = (name,component,imageIndex) => {
  const images = [
    require('./icons/home.png'),
    require('./icons/list.png'),
    require('./icons/star.png'),
  ]
  return(
    <Tab.Screen name={name} component={component} options={{ tabBarIcon: ({size,activeTintColor,color}) => {
      return ( <Image 
        style={{ 
          width: size,
          height: size,
          // backgroundColor:color,
          tintColor:color
          
        }}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'yellow',
        }}
        source={images[imageIndex]} /> );
    }}}/>
  )
}

export default App;  