import React, { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import {
  GiftedChat,
  Bubble,
  Send,
  SystemMessage
} from 'react-native-gifted-chat'
import { AuthContext } from '../navigation/AuthProvider'
import Icon from 'react-native-vector-icons/Feather'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import { Loading } from '../components'
import { Colors } from '../styles'
import { THREADS, MESSAGES } from '../constants'

const Room = ({ route }) => {
  const { thread } = route.params
  const { user } = useContext(AuthContext)
  const currentUser = user.toJSON()
  const currentThread = firestore().collection(THREADS).doc(thread._id)
  const threadMessages = currentThread.collection(MESSAGES)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const messageListener = threadMessages
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const messagesRes = querySnapshot.docs.map((doc) => {
          const firebaseData = doc.data()
          const data = {
            _id: doc.id,
            createdAt: new Date().getTime(),
            ...firebaseData
          }
          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.email
            }
          }
          return data
        })
        setMessages(messagesRes)
      })
    return () => messageListener()
  }, [])

  const handleSend = async (newMessage) => {
    const text = newMessage[0].text
    try {
      await threadMessages.add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: currentUser.uid,
          email: currentUser.email
        }
      })

      await currentThread.set(
        {
          latestMessage: {
            text,
            createdAt: new Date().getTime()
          }
        },
        { merge: true }
      )
    } catch (error) {
      console.log(error)
    }
    setMessages(GiftedChat.append(messages, newMessage))
  }

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: Colors.primaryColor
        }
      }}
      textStyle={{
        right: {
          color: Colors.textButton
        }
      }}
    />
  )

  const renderSend = (props) => (
    <Send {...props}>
      <View
        style={{
          padding: 4,
          margin: 4
        }}>
        <MIcon name="send" size={26} color={Colors.primaryColor} />
      </View>
    </Send>
  )

  const scrollToBottomComponent = () => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
      }}>
      <Icon name="chevrons-down" size={24} color={Colors.primaryColor} />
    </View>
  )

  const renderEmptyChat = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          transform: [{ scaleY: -1 }] // This is a trick to solve the reversed text bug
        }}>
        <Text>This room is empty</Text>
      </View>
    )
  }
  const renderLoading = () => <Loading />

  const renderSystemMessage = (props) => (
    <SystemMessage
      {...props}
      wrapperStyle={{
        backgroundColor: Colors.textPlaceholder,
        borderRadius: 4,
        paddingVertical: 2,
        paddingHorizontal: 4
      }}
      textStyle={{
        fontSize: 14,
        color: Colors.textButton
      }}
    />
  )

  return (
    <GiftedChat
      user={{ _id: currentUser.uid }}
      messages={messages}
      onSend={handleSend}
      textInputProps={{ selectionColor: Colors.primaryColor }}
      placeholder={'Type your message here...'}
      renderBubble={renderBubble}
      renderSend={renderSend}
      scrollToBottomComponent={scrollToBottomComponent}
      renderLoading={renderLoading}
      renderChatEmpty={renderEmptyChat}
      renderSystemMessage={renderSystemMessage}
      showUserAvatar
      alwaysShowSend
      scrollToBottom
    />
  )
}

export default Room
