import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './components/HomeScreen';
import Listings from './components/Listings';
import Details from './components/Details';


// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Listings" component={Listings} />
          <Tab.Screen name="Details" component={Details} />
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


export default App;  