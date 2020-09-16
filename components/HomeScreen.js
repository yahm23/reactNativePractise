import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const HomeScreen = () => {

  return (
    <View style={styles.Home}>
      <Text style={styles.text}>Welcome to the Home Page</Text>
      {/* <Image source={{uri:'https://miro.medium.com/fit/c/282/282/1*UaPiShzG0yPygw5cJ5HSXQ.png'}} style={styles.img}></Image> */}
    </View>
  )
}

// HomeScreen.defaultProps ={
//     title:"Shopping List"
// }

const styles = StyleSheet.create({

  Home:{
    height:60,
    padding:15,
    backgroundColor:'beige'
  },

  text:{
    color:'black',
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

export default HomeScreen;  