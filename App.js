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
        <Tab.Navigator>
            {TabBarIcon("Home",HomeScreen,0)}
            {TabBarIcon("Listings",Listings,0)}
            {TabBarIcon("Details",Details,0)}
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
  }
})

const TabBarIcon = (name,component,imageIndex) => {
  const images = [require('./icons/home2.jpg'), require('./icons/home2.jpg')]
  return(
    <Tab.Screen name={name} component={component} options={{ tabBarIcon: ({size,focused,color}) => {
      return ( <Image 
        style={{ 
          width: size +10,
          height: size,
        }}
        source={images[imageIndex]} /> );
    }}}/>
  )
}

export default App;  