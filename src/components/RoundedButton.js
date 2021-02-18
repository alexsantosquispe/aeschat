import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { GlobalStyles } from '../styles'

const RoundedButton = (props) => {
  const { title, onPressHandler, type, disabled = false } = props
  const typeButton = disabled
    ? GlobalStyles['disabled']
    : type
    ? GlobalStyles[type]
    : GlobalStyles.primary

  const labelButton = disabled
    ? GlobalStyles['disabledLabel']
    : type
    ? GlobalStyles[`${type}Label`]
    : GlobalStyles.primaryLabel

  return (
    <TouchableOpacity
      style={[GlobalStyles.button, typeButton]}
      onPress={onPressHandler}
      disabled={disabled}>
      <Text style={[GlobalStyles.labelButton, labelButton]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default RoundedButton
