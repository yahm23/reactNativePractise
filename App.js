import React,{useState} from 'react';
import {View, StyleSheet, Image,Switch, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import Bookings from './components/Bookings';
import Details from './components/Details';
import Account from './components/Account';
import Login from './components/Login';


const Tab = createBottomTabNavigator();

const App = () => {
  const [darkMode, setdarkMode] = useState(false);
  const toggleSwitch = () => setdarkMode(previousState => !previousState);

  const Stack = createStackNavigator();

  const TabBarStyles ={
    tabStyle: {
      paddingTop: 20,
    },
    keyboardHidesTabBar: true,
    style: {
      height: Platform.OS === 'ios' ? 100 : 75,
      backgroundColor:darkMode?'#5c5b5d':'#fafafa'
    },
    labelPosition: 'below-icon',
   
    labelStyle: {
      marginTop: 15,
      marginBottom: 5,
    },
    activeTintColor: darkMode?'white':'red',
    inactiveTintColor: darkMode?'#d0d0d0':'grey',
  }
  
  const TabBarIcon = (name,component,imageIndex) => {
    const images = [
      require('./icons/home.png'),
      require('./icons/list.png'),
      require('./icons/star.png'),
      require('./icons/user.png'),
    ]
    const Component = component;
    return(
      <Tab.Screen name={name} 
        children={()=><Component darkMode={darkMode}/>}
        options={{ tabBarIcon: ({size,color}) => {
          
        return ( <Image 
          style={{ 
            width: size,
            height: size,
            tintColor:color,
          }}
          source={images[imageIndex]} /> );
      }}}/>
    )
  }

  const styles = StyleSheet.create({
    container:{
      backgroundColor: darkMode?'#2f2f2f':'white',
      
      flex:1,
     
      paddingTop: Platform.OS === 'ios' ? 50 : 0,
    },
    tabs:{
      paddingTop:150,
    }
  })
  
  
  return (
    <View style={styles.container}>
     
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#fafafa" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={darkMode}
          style={{ 
            transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
            flexDirection:"row-reverse",
            alignSelf:"flex-end"
          }}
        />
        <NavigationContainer >
          <Tab.Navigator tabBarOptions={TabBarStyles}>
              {TabBarIcon("Home",HomeScreen,0)}
              {TabBarIcon("Bookings",Bookings,1)}
              {TabBarIcon("Details",Details,2)}
              {TabBarIcon("Account",Account,3)}
          </Tab.Navigator>
          
        </NavigationContainer>
       
    </View>
  )
}



export default App;  