import React, { Component } from 'react'
import { Text, View, ListView } from 'react-native'
import Component1 from './components/Component1/Component1'
import Component2 from './components/Component2/Component2'
import Component3 from './components/Component3/Component3'
import Component4 from './components/Component4/Component4'

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

    // const users = [
    //   {name: 'John Doe'},
    //   {name: 'Brad Traversy'},
    //   {name: 'Steve Smith'},
    //   {name: 'Janet Williams'}
    // ]
    // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    // const dataSource = ds.cloneWithRows(users)
    // console.log(dataSource)

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
        <Component4
          // userDataSource={dataSource}
          // renderRow={this.renderRow.bind(this)}
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
