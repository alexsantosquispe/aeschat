import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Room, AddRoom } from '../screens'

const ChatAppStack = createStackNavigator()
const ModalStack = createStackNavigator()

const ChatApp = () => {
  return (
    <ChatAppStack.Navigator>
      <ChatAppStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center'
        }}
      />
      <ChatAppStack.Screen
        name="Room"
        component={Room}
        options={({ route }) => ({
          title: route.params.thread.name
        })}
      />
    </ChatAppStack.Navigator>
  )
}

const HomeStack = () => {
  return (
    <ModalStack.Navigator mode="modal" headerMode={false}>
      <ModalStack.Screen name="ChatApp" component={ChatApp} />
      <ModalStack.Screen name="AddRoom" component={AddRoom} />
    </ModalStack.Navigator>
  )
}

export default HomeStack
