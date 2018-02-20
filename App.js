import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Component1 from './components/Component1/Component1'
import Component2 from './components/Component2/Component2'

export default class App extends Component {
  state = {
    name: 'Brad',
    showName: false
  }

  render() {
    const name = this.state.showName ? this.state.name : 'No name'
    return (
      <View>
        <Text>Hello World!</Text>
        <Component1 message='Hello World!' name={ name } />
        <Component2 />
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
