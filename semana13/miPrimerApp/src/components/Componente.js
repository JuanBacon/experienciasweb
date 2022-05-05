import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Componente() {
  return (
    <View style = {[style.rotate, style.container]}>
        <View style = {style.box1}>
            <View style = {style.circle}></View>
        </View>

        <View style = {style.box2}>
            <View>
                <View style = {style.rotate}>
                    <View style = {style.circle}></View>
                    <View style = {style.circle}></View>
                </View>
            </View>      
        </View> 
    </View>
  )
}

const style = StyleSheet.create({
    
    rotate: {
       
        transform: [
            { rotate: '45deg' },
        ],
          
    },
    box1: {
        backgroundColor: '#D2112C',
        width: 180,
        height: 180,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center', 
        borderWidth: 10,
        borderColor: 'white',
        borderTopEndRadius: 25,
        borderTopStartRadius: 25
    },
    box2: {
        backgroundColor: '#0078AC',
        width: 180,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 10,
        borderColor: 'white',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
        
        },
    circle: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 10
    }
});