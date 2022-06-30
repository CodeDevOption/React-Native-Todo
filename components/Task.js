import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


export default function Task({text}) {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style = {styles.square}></View>
            <Text style={styles.itemText}>{text}</Text>
        </View>
        <View style={styles.circuler}></View>
    </View>
  )
}
const styles = StyleSheet.create({
    item:{
        backgroundColor:"#fff",
        borderRadius:10,
        padding:15,
        margin:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55bcf6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    itemLeft:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    itemText:{
        maxWidth:'80%',
    },
    circuler:{
        width:12,
        height:12,
        borderColor:'#55bcf6',
        borderWidth:3,
        borderRadius:10,
    }
});

