import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import FlatTest from './components/flatTest';
import Header from './components/Header'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <View style={styles.container}>
      
     
      <Navbar></Navbar>
      {/* <FlatTest></FlatTest> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    // paddingTop:60
  },
  text:{
    justifyContent:"center",
    alignContent:'center'
  }
})

export default App;  