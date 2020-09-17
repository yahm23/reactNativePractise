import React,{useState} from 'react';
import {View, StyleSheet, Image,Switch, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen';
import Bookings from './components/Bookings';
import Details from './components/Details';
import Account from './components/Account';


const Tab = createBottomTabNavigator();

const App = () => {
  const [darkMode, setdarkMode] = useState(false);
  const toggleSwitch = () => setdarkMode(previousState => !previousState);

  
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



const TabBarStyles ={
  tabStyle: {
    paddingTop: 20,
  },
  keyboardHidesTabBar: true,
  style: {
    height: Platform.OS === 'ios' ? 100 : 75,
  },
  labelPosition: 'below-icon',
  // style:{backgroundColor:"f3f3f3"},
  labelStyle: {
    marginTop: 5,
    marginBottom: 5,
  },
  activeTintColor: 'red',
  inactiveTintColor: 'grey',
}
export default App;  