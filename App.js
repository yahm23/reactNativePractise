import React from 'react';
import {View,Text, StyleSheet, ScrollView} from 'react-native';
// import FlatTest from './components/flatTest';
import Header from './components/Header'
import Navbar from './components/Navbar'
import NavRowTest from './components/NavRowTest';

const App = () => {

  return (
    <View style={styles.container}>
      
     
      <ScrollView>
        <Text> Main Shit</Text> 
      </ScrollView>
      <NavRowTest></NavRowTest>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

export default App;  