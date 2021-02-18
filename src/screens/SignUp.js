import React, { useState, useContext } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'
import { InputBox, RoundedButton } from '../components'
import { Colors, GlobalStyles } from '../styles'

const SignUp = ({ navigation }) => {
  const { register } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const onUserChanged = (text) => setUsername(text)
  const onPasswordChanged = (text) => setPassword(text)

  const goBack = () => {
    navigation.goBack()
  }

  const signUp = () => {
    register(username, password)
  }

  return (
    <View style={GlobalStyles.container}>
      <StatusBar
        backgroundColor={Colors.accentColor}
        barStyle={'dark-content'}
      />
      <Text style={GlobalStyles.title}>Create Account</Text>
      <InputBox
        icon="user"
        placeholder="Enter username"
        value={username}
        onChangeHandler={onUserChanged}
      />
      <InputBox
        icon="lock"
        placeholder="Enter password"
        value={password}
        onChangeHandler={onPasswordChanged}
        secureTextEntry={true}
      />
      <RoundedButton title="Sign Up" onPressHandler={signUp} />
      <RoundedButton title="Go Back" type="secondary" onPressHandler={goBack} />
    </View>
  )
}

export default SignUp
