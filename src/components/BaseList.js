import React from 'react'
import { FlatList } from 'react-native'
import EmptyList from './EmptyList'
const BaseList = (props) => {
  const { data, renderItem, keyExtractor, divider } = props

  return data.length > 0 ? (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={divider}
    />
  ) : (
    <EmptyList message="You do not have rooms created yet" />
  )
}

export default BaseList
