import React, { useContext, useState, useEffect, useLayoutEffect } from 'react'
import { View, StatusBar, Text, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/Feather'
import { AuthContext } from '../navigation/AuthProvider'
import { FloatActionButton, Loading, BaseList } from '../components'
import { THREADS } from '../constants'
import { Colors, GlobalStyles } from '../styles'

const Home = ({ navigation }) => {
  const { logout } = useContext(AuthContext)
  const [threads, setThreads] = useState([])
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ paddingVertical: 4, paddingHorizontal: 16 }}
          onPress={signOut}>
          <Icon name="log-out" size={24} color={Colors.primaryColor} />
        </TouchableOpacity>
      )
    })
  }, [navigation])

  useEffect(() => {
    const unsubscribe = firestore()
      .collection(THREADS)
      .orderBy('latestMessage.createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const threadsRes = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            ...documentSnapshot.data()
          }
        })
        setThreads(threadsRes)

        if (loading) {
          setLoading(!loading)
        }
      })
    return () => unsubscribe()
  }, [])

  const openModal = () => navigation.navigate('AddRoom')
  const openRoom = (item) => navigation.navigate('Room', { thread: item })
  const signOut = () => logout()

  const renderListItem = ({ item }) => (
    <TouchableOpacity style={{ padding: 8 }} onPress={() => openRoom(item)}>
      <Text
        style={{ color: Colors.textTitle, fontSize: 18, fontWeight: '900' }}>
        {item.name}
      </Text>
      <Text style={{ fontSize: 16, color: Colors.textPlaceholder }}>
        {item.latestMessage.text}
      </Text>
    </TouchableOpacity>
  )

  const renderDivider = () => (
    <View
      style={{
        backgroundColor: Colors.disabledButton,
        height: 1,
        width: '100%'
      }}
    />
  )

  return loading ? (
    <Loading />
  ) : (
    <View style={GlobalStyles.container2}>
      <StatusBar
        backgroundColor={Colors.statusBarColor}
        barStyle={'dark-content'}
      />
      <BaseList
        data={threads}
        keyExtractor={(item) => item._id}
        renderItem={renderListItem}
        divider={renderDivider}
      />
      <FloatActionButton
        icon="message-square"
        onPressHandler={openModal}
        alignment="right"
      />
    </View>
  )
}

export default Home
