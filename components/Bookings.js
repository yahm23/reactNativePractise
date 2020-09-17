import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Bookings = () => {

  return (
    <View style={styles.Home}>
      <Text style={styles.text}>Bookings Bitch</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  Home:{
    height:60,
    padding:15,
    backgroundColor:'darkslateblue'
  },

  text:{
    color:'#fff',
    fontSize:26,
    textAlign:"center"
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

export default Bookings;  