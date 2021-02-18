import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Colors, GlobalStyles } from '../styles'

const Loading = () => {
  return (
    <View style={GlobalStyles.loadingContainer}>
      <ActivityIndicator size="large" color={Colors.primaryColor} />
    </View>
  )
}

export default Loading
