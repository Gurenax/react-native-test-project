import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Component1 from './components/Component1/Component1'
import Component2 from './components/Component2/Component2'

export default class App extends Component {
  state = {
    name: 'Brad',
    showName: false
  }

  onPress1() {
    console.log('Area 1 Pressed!')
  }

  onPress2() {
    console.log('Area 2 Pressed!')
  }

  render() {
    const name = this.state.showName ? this.state.name : 'No name'
    return (
      <View>
        <Text>Hello World!</Text>
        <Component1 message='Hello World!' name={ name } />
        <Component2
          onPress1={this.onPress1}
          onPress2={this.onPress2}
        />
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
