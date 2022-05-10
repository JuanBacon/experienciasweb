import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MiComponente from '../components/MiComponente.js';

const Stack = createNativeStackNavigator();

export default function User() {
  return (
    
        <Stack.Navigator>
            <Stack.Screen name='Login' component={MiComponente}></Stack.Screen>
            <Stack.Screen name='Register' component={MiComponente}></Stack.Screen>
        </Stack.Navigator>
    
  )
}