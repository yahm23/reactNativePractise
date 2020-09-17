import React, {useState} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';

const HomeScreen = () => {

  return (
    <View style={styles.Home}>
      <Text style={styles.text}>Welcome to the Home Page, you're on a {Platform.OS === 'ios'? 'IOS':'Android'}</Text>
    </View>
  )
}


const styles = StyleSheet.create({

  Home:{
    // height:,
    // padding:15,
    backgroundColor:'beige'
  },

  text:{
    color:'black',
    fontSize:26,
    textAlign:"center",
    // display:'flex',
    // flexShrink:1
  },

  img:{
    margin:30,
    width:100,
    height:100,
    // textAlign:"center",
    justifyContent:"center",
    borderRadius:100/2
  }

})

export default HomeScreen;  