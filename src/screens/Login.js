import React, { useState, useContext } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'
import { InputBox, LinkText, RoundedButton } from '../components'
import { Colors, GlobalStyles } from '../styles'

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const onUserChanged = (text) => setUsername(text)
  const onPasswordChanged = (text) => setPassword(text)

  const goToSignUpPage = () => {
    navigation.navigate('SignUp')
  }

  const singIn = () => {
    login(username, password)
  }

  return (
    <View style={GlobalStyles.container}>
      <StatusBar
        backgroundColor={Colors.accentColor}
        barStyle={'dark-content'}
      />
      <Text style={GlobalStyles.title}>Welcome to Chat App</Text>
      <Text style={GlobalStyles.subtitle}>
        Find your all friends in one place by signing the apps quick and easily.
      </Text>
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
      <RoundedButton title="Login" onPressHandler={singIn} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 20
        }}>
        <Text style={GlobalStyles.regularText}>Don't have account?</Text>
        <LinkText text={'Sign Up'} onPressHandler={goToSignUpPage} />
      </View>
    </View>
  )
}

export default Login
