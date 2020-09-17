import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import PageDefault from './PageDefault';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import HomeScreen from './HomeScreen';

const Account = ({darkMode}) => {
  const Stack = createStackNavigator()
  const Account =()=> {
    return(
      <View>
        {/* <Text style={styles.text}>Account Bitch</Text> */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} ><Text style={styles.textButton}>Test</Text></TouchableOpacity>
        <Stack.Navigator>

          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </View>
      )
  }

  const styles = StyleSheet.create({
    text:{
      color:darkMode?'#fff':'grey',
      fontSize:26,
      textAlign:"center"
    },
    textButton:{
      color:darkMode?'black':'grey',
      fontSize:26,
      textAlign:"center"
    },
    button:{
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
      
    }
  })
  
  return (
    <PageDefault component={Account} darkMode={darkMode}></PageDefault>
  )
}



export default Account;  