import React from 'react'
import { View, Text } from 'react-native'
import { GlobalStyles } from '../styles'

const EmptyList = ({ message }) => {
  const textMessage = message || 'There are no items to display'
  return (
    <View style={GlobalStyles.container2}>
      <Text style={GlobalStyles.regularText}>{textMessage}</Text>
    </View>
  )
}

export default EmptyList
