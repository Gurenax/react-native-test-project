import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'

export default class App extends React.Component {
  state = {
    red: 'just red',
    blue: 'just bigblue',
    blue_red: 'bigblue, then red',
    red_blue: 'red, then bigblue',
    text: 'Hello World!'
  }
  render() {
    const { red, blue, blue_red, red_blue, text} = this.state
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>
      <View style={styles.container}>
        {/* <Text style={styles.red}>{red}</Text>
        <Text style={styles.bigblue}>{blue}</Text>
        <Text style={[styles.bigblue, styles.red]}>{blue_red}</Text>
        <Text style={[styles.red, styles.bigblue]}>{red_blue}</Text> */}
        <View style={styles.powderblue}>
        </View>
        <View style={styles.skyblue}>
          <TextInput style={styles.text1}
                    placeholder='Enter text'
                    onChangeText={text => {
                      this.setState({text})
                    }} />
          <Button
            onPress={() => {
              Alert.alert(`You tapped the button! The message is ${text}`)
            }}
            title="Press Me"
          />
        </View>
        <View style={styles.steelblue}>
          <Text style={styles.text2}>{text}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  powderblue: {
    // width: 50, height: 50,
    flex: 1,
    backgroundColor: 'powderblue'
  },
  skyblue: {
    // width: 100, height: 100,
    flex: 2,
    backgroundColor: 'skyblue'
  },
  steelblue: {
    // width: 150, height: 150
    flex: 3,
    backgroundColor: 'steelblue'
  },
  text1: {
    fontSize: 70
  },
  text2: {
    fontSize: 50
  }
})
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
