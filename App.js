import React from 'react'
import { Text, View, ListView, ScrollView } from 'react-native'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import Component1 from './components/Component1/Component1'
import Component2 from './components/Component2/Component2'
import Component3 from './components/Component3/Component3'
import Component4 from './components/Component4/Component4'
import Component5 from './components/Component5/Component5'
import Component6 from './components/Component6/Component6'

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Component5: {
      screen: Component5
    },
    Component6: {
      screen: Component6
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    initialRouteName: 'Home'
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

// const SimpleApp = StackNavigator(
//   { Home: { screen: HomeScreen }, LoginView: { screen: LoginView } },
//   (navigationOptions: { header: { visible: false } })
// )
