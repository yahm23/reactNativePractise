import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = ({title}) => {

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      {/* <Image source={{uri:'https://miro.medium.com/fit/c/282/282/1*UaPiShzG0yPygw5cJ5HSXQ.png'}} style={styles.img}></Image> */}
    </View>
  )
}

Header.defaultProps ={
    title:"Shopping List"
}

const styles = StyleSheet.create({

  header:{
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

export default Header;  