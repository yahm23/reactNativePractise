import React,{useEffect} from 'react';
import {View,Text, StyleSheet, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from './RootNavigation';

// import FlatTest from './components/flatTest';
// import Header from './components/Header'
// import Navbar from './components/Navbar'
import NavRowTest from './components/NavRowTest';
import HomeScreen from './components/HomeScreen';
import Listings from './components/Listings';


const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);

  return (
    <NavigationContainer 
    ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Listings" component={Listings} />
      </Stack.Navigator>

      
      <NavRowTest ></NavRowTest>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:60,
    // paddingVertical:60,
  }
})

export default App;  

   {/* <View style={styles.container}>
        <ScrollView>
          <Text> Main Shit</Text> 
        </ScrollView>
      </View> */}