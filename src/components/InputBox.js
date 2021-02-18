import React from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, GlobalStyles } from '../styles'

const InputBox = (props) => {
  const {
    icon,
    value,
    placeholder,
    secureTextEntry = false,
    onChangeHandler
  } = props
  return (
    <View style={GlobalStyles.textBoxContainer}>
      {icon ? (
        <View style={GlobalStyles.iconTextBox}>
          <Icon name={icon} size={22} color={Colors.primaryColor} />
        </View>
      ) : null}
      <TextInput
        style={GlobalStyles.textBox}
        selectionColor={Colors.primaryColor}
        placeholder={placeholder}
        placeholderTextColor={Colors.textPlaceholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeHandler}
      />
    </View>
  )
}

export default InputBox
