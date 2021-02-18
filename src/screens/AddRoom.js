import React, { useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { InputBox, RoundedButton, FloatActionButton } from '../components'
import { THREADS, MESSAGES } from '../constants'
import { Colors, GlobalStyles } from '../styles'

const AddRoomModal = ({ navigation }) => {
  const [roomName, setRoomName] = useState('')
  const onChangeRoomName = (text) => setRoomName(text)

  const closeModal = () => {
    navigation.goBack()
  }

  const createRoom = async () => {
    if (roomName.length > 0) {
      try {
        const threads = firestore().collection(THREADS)
        const res = await threads.add({
          name: roomName,
          latestMessage: {
            text: `You have joined the room "${roomName}"`,
            createdAt: new Date().getTime()
          }
        })
        await res.collection(MESSAGES).add({
          text: `You have joined the room "${roomName}"`,
          createdAt: new Date().getTime(),
          system: true
        })
        navigation.navigate('Home')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <View style={GlobalStyles.container}>
      <StatusBar
        backgroundColor={Colors.accentColor}
        barStyle={'dark-content'}
      />
      <Text style={GlobalStyles.title}>Create a new Chat Room</Text>
      <InputBox
        placeholder="Room name"
        value={roomName}
        onChangeHandler={onChangeRoomName}
      />
      <RoundedButton
        title="Create"
        onPressHandler={createRoom}
        disabled={roomName.length === 0}
      />
      <FloatActionButton
        icon="x"
        type="secondary"
        onPressHandler={closeModal}
      />
    </View>
  )
}

export default AddRoomModal
