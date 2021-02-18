import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, GlobalStyles } from '../styles'

const IconButton = (props) => {
  const { icon, onPressHandler } = props
  return (
    <TouchableOpacity onPress={onPressHandler} style={GlobalStyles.iconButton}>
      <Icon name={icon} size={24} color={Colors.primaryColor} />
    </TouchableOpacity>
  )
}

export default IconButton
