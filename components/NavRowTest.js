import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function NavRowTest() {
    const data = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Bitch',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
    ];

    const Item = ({ title }) => (
          <Text style={styles.text}>{title}</Text>
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
      backgroundColor:'pink',
      justifyContent:'space-between',
    }
    ,text:{
      color:'black'
    },
    item:{
        backgroundColor:'yellow',
      flexDirection:"row" 
    },

    
})