import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PageDefault from './PageDefault';

const Account = ({darkMode}) => {
  
  const Account =()=> {
    return(<Text style={styles.text}>Account Bitch</Text>)
  }

  const styles = StyleSheet.create({
    text:{
      color:darkMode?'#fff':'grey',
      fontSize:26,
      textAlign:"center"
    },
    img:{
      margin:30,
      width:100,
      height:100,
      justifyContent:"center",
      borderRadius:100/2
    }
  })
  
  return (
    <PageDefault component={Account} darkMode={darkMode}></PageDefault>
  )
}



export default Account;  