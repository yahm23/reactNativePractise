import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen';
import Listings from './components/Listings';
import Details from './components/Details';
import Account from './components/Account';


const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Tab.Navigator tabBarOptions={TabBarStyles}>
            {TabBarIcon("Home",HomeScreen,0)}
            {TabBarIcon("Listings",Listings,1)}
            {TabBarIcon("Details",Details,2)}
            {TabBarIcon("Account",Account,3)}
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
    require('./icons/user.png'),
  ]
  return(
    <Tab.Screen name={name}
     component={component} options={{ tabBarIcon: ({size,color}) => {
      return ( <Image 
        style={{ 
          width: size,
          height: size,
          tintColor:color
        }}
        source={images[imageIndex]} /> );
    }}}/>
  )
}

const TabBarStyles ={
  tabStyle: {
    paddingTop: 20,
  },
  style: {
    height: 100,
  },
  labelPosition: 'below-icon',
  labelStyle: {
    marginTop: 5,
    marginBottom: 4,
  },
  activeTintColor: 'tomato',
  inactiveTintColor: 'grey',
}
export default App;  