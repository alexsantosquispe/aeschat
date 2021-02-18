import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { GlobalStyles } from '../styles'

const LinkText = (props) => {
  const { text, onPressHandler } = props
  return (
    <TouchableOpacity
      style={GlobalStyles.linkContainer}
      onPress={onPressHandler}>
      <Text style={GlobalStyles.link}>{text}</Text>
    </TouchableOpacity>
  )
}

export default LinkText
