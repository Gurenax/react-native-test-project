import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'

const Component2 = ({
  onPress1,
  onPress2
}) => {
  return (
    <View>
      <View style={styles.myView}>
        <Text style={styles.myText}>Hello Brad!</Text>
      </View>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.v1}
          onPress={onPress1}
          underlayColor='blue'
          >
          <View>
            <Text>View 1</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.v2}
          onPress={onPress2}
        >
          <View>
            <Text>View 2</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.v3}>
          <Text style={styles.vText}>View 3</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'blue'
  },
  myText: {
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    height: 100,
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  vText: {
    color: 'white'
  }
})
export default Component2