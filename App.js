import React from 'react';
import {View, StyleSheet, Image, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen';
import Bookings from './components/Bookings';
import Details from './components/Details';
import Account from './components/Account';


const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Tab.Navigator tabBarOptions={TabBarStyles}>
            {TabBarIcon("Home",HomeScreen,0)}
            {TabBarIcon("Bookings",Bookings,1)}
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
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
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
    height: Platform.OS === 'ios' ? 100 : 75,
  },
  labelPosition: 'below-icon',
  labelStyle: {
    marginTop: 5,
    marginBottom: 5,
  },
  activeTintColor: 'red',
  inactiveTintColor: 'grey',
}
export default App;  