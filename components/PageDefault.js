import React from 'react';
import {View,StyleSheet} from 'react-native';
// import { Card } from 'react-native-elements'


const PageDefault = ({darkMode, component}) => {
  const styles = StyleSheet.create({
    home:{
      flex:1,
      padding:30,
      backgroundColor: darkMode?'#2f2f2f':'white',
    }
  })

  const Component = component;

  return (
    <View style={styles.home}>
      <Component/>
    </View>
  )


}


export default PageDefault;  