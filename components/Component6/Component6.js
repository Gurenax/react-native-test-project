import React from 'react'
import { Text, View, Button } from 'react-native'

export default class Component6 extends React.Component {
  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <Text>{params.user.id}</Text>
        <Text>{params.user.name}</Text>
        <Text>{JSON.stringify(params.user.address)}</Text>
        <Text>{params.user.phone}</Text>
        <Text>{params.user.email}</Text>
        <Button
          title="Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}