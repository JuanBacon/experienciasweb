import { View, Text } from 'react-native'
import React from 'react'

export default function Saludo(props) {
  return (
    <View>
      <Text>Saludos {props.name} {props.emoji}</Text>
    </View>
  )
}

Saludo.defaultProps = {
    name : "Nombre",
    emoji : "😀"
}