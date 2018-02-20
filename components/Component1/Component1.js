import React from 'react'
import { Text, View } from 'react-native'

const Component1 = ({
  message,
  name
}) => {
  return (
    <View>
      <Text>{ message }</Text>
      <Text>{ name }</Text>
    </View>
  )
}

export default Component1