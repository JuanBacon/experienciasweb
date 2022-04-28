import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput} from 'react-native'


export default function MiComponente() {
  return (
      <View>
          <Text style={inputStyles.title}>INICIO DE SESION</Text>
          <TextInput placeholder='Usuario' style={inputStyles.input}></TextInput>
          <TextInput placeholder='contraseña' secureTextEntry={true} style={inputStyles.input}></TextInput>
          <Button title='Iniciar sesion' style={inputStyles.input}></Button>
          
      </View>
  );
}

const inputStyles = StyleSheet.create({
    input: {
        padding : 10,
    },
    title:{
        padding: 20,
        fontSize: 30
        
    }
  });