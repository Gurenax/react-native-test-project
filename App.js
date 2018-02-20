import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Component1 from './components/Component1/Component1'
import Component2 from './components/Component2/Component2'
import Component3 from './components/Component3/Component3'

export default class App extends Component {
  state = {
    name: 'Brad',
    showName: false,
    textValue: 'Hello',
    switchValue: false
  }

  onPress1() {
    console.log('Area 1 Pressed!')
  }

  onPress2() {
    console.log('Area 2 Pressed!')
  }

  onChangeText(value) {
    this.setState({
      textValue: value
    })
  }

  onSubmit() {
    console.log('Input Submitted!')
  }

  onSwitchChange(value) {
    this.setState({
      switchValue: value
    })
  }

  render() {
    const name = this.state.showName ? this.state.name : 'No name'
    const { textValue, switchValue } = this.state
    return (
      <View>
        <Text>Hello World!</Text>
        <Component1 message='Hello World!' name={ name } />
        <Component2
          onPress1={this.onPress1}
          onPress2={this.onPress2}
        />
        <Component3
          value={textValue}
          onChangeText={this.onChangeText.bind(this)}
          onSubmit={this.onSubmit}
          switchValue={switchValue}
          onSwitchChange={this.onSwitchChange.bind(this)}
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
