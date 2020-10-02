import React, {useState} from 'react';
import {View, Image, Platform, StyleSheet, Button} from 'react-native';
// import { Card } from 'react-native-elements'

import { TextInput } from 'react-native';
import PageDefault from './PageDefault';
import Intercom from 'react-native-intercom';
// or…
// var Intercom = require('react-native-intercom');

const HomeScreen = ({darkMode}) => {
  const[inputText,setInput] = useState('Search for something');
  const[focused,setFocus] = useState(false);
  
  const onFocus = () => setFocus(true)
  
  const styles = StyleSheet.create({
    inputContainer:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      borderColor: darkMode?'white':'red',
      borderRadius:25,
      borderWidth: 1,
      alignItems:"center",
      backgroundColor:darkMode?(focused? 'white':"#2f2f2f"):(focused? 'white':"#fafafa"),
      margin:25,
    },
    icon:{
      height:20,
      width:20,
      marginRight:10,
      marginVertical:10,
      marginLeft:15,
      tintColor: darkMode?'white':'red'
    },
    
    input:{ 
      height: 40,
      color:darkMode?'white':'grey',
      flex:1,
      paddingRight:25,
    },
    
    text:{
      
      color:'black',
      fontSize:26,
      textAlign:"center",
    },

    img:{
      margin:30,
      width:100,
      height:100,
      justifyContent:"center",
      borderRadius:100/2
    }

  })


  const Home = () => {
    Intercom.registerIdentifiedUser({ userId: 'Bob' });
    Intercom.logEvent('viewed_screen', { extra: 'metadata' });


    return(
      <View >
        <View style={styles.inputContainer}>
        <Image  style={styles.icon} source={require('../icons/search.png')} />
          <TextInput 
          onFocus={ () => onFocus() }
          style={styles.input}
          clearTextOnFocus={true}
          onChangeText={text => setInput(text)}
          value={inputText}
        />
      </View>
        <Button title="String bitch" onPress={()=>Intercom.displayMessageComposer()}></Button>
      </View>
    )
  }
  return (
    <PageDefault darkMode={darkMode} component={Home}></PageDefault>
  )

}


export default HomeScreen;  