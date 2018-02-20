import React from 'react'
import { Text, View, ListView, ScrollView, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Component1 from './Component1/Component1'
import Component2 from './Component2/Component2'
import Component3 from './Component3/Component3'
import Component4 from './Component4/Component4'
import Component5 from './Component5/Component5'
import Component6 from './Component6/Component6'

export default class HomeScreen extends React.Component {
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
      <ScrollView>
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
        <Component4 />

        <Button
          title="Go to Component 5"
          onPress={() => this.props.navigation.navigate('Component5')}
        />
      </ScrollView>
    )
  }
}