import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native';
// import { withNavigation } from 'react-navigation';
// import { useNavigation } from '@react-navigation/native';
import * as RootNavigation from '../RootNavigation.js';


function NavRowTest({}) {
    const data = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Home',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Listings',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'My Account',
        },
    ];
    // const navigation = useNavigation();


    const Item = ({ title }) => (
        <Text onPress={() =>RootNavigation.navigate(title)}
        style={styles.text}>{title}</Text>
    );
      

       
    return (
        <View style={styles.navContainer}>
            {data.map((entry)=>{
                return (<Item key={entry.id}  title={entry.title} />)
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer:{
      flexDirection:"row",
      backgroundColor:'beige',
      paddingVertical:25,
      paddingHorizontal: 15,
      justifyContent:'space-around',
    }
    ,text:{
      color:'black',
      borderWidth:1,
      width:100,
      padding:10,
      borderColor:"black"
    //    :"center"
    },
    item:{
        backgroundColor:'yellow',
      flexDirection:"row" 
    },

    
})

export default NavRowTest;
// export default withNavigation(NavRowTest)