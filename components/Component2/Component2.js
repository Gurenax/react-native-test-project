import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Component2 = ({
  
}) => {
  return (
    <View style={styles.myView}>
      <Text style={styles.myText}>Hello Brad!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'blue'
  },
  myText: {
    color: 'white'
  }
})
export default Component2