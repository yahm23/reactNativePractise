import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function Navbar() {
    const DATA = [
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
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
    );
      
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
       
    return (
        <View style={styles.navContainer}>
            <FlatList data={DATA} 
             renderItem={renderItem}
             style={styles.flatList}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer:{
      backgroundColor:'black',
      paddingTop:134
    }
    ,title:{
      backgroundColor:'black',
      color:'beige'
    },
    item:{
      flexDirection:"row" 
    }
})