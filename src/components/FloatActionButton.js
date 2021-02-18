import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, GlobalStyles } from '../styles'

const FloatActionButton = (props) => {
  const { icon, onPressHandler, alignment, type } = props
  const position =
    alignment === 'left' || alignment === 'right' ? GlobalStyles[alignment] : {}
  const typeButton = type ? GlobalStyles[type] : GlobalStyles.primary
  const labelButton =
    type === 'secondary' ? Colors.textTitle : Colors.textButton

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[GlobalStyles.floatActionButton, position, typeButton]}>
      <Icon name={icon} size={24} color={labelButton} />
    </TouchableOpacity>
  )
}

export default FloatActionButton
