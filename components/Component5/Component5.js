import React from 'react'
import { Text, View, ListView, StyleSheet, Button, TouchableOpacity } from 'react-native'

export default class Component5 extends React.Component {
  state = {
    dataSource: null
  }

  fetchUsers = () => {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => {
        // console.log(response)
        this.setState({
          dataSource: ds.cloneWithRows(response)
        })
      })
  }

  componentDidMount() {
    this.fetchUsers()
  }

  render() {
    const renderRow = (user, sectionId, rowId, highlightRow) => {
      return(
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Component6', {
            user: user
          })}>
          <View style={styles.row}>
            <Text style={styles.rowText}>{user.name}: {user.email}</Text>
          </View>
        </TouchableOpacity>
      )
    }

    const styles = StyleSheet.create({
      row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3
      },
      rowText: {
        flex: 1
      }
    })

    const { dataSource } = this.state

    return (
      <View style={{flex:1, backgroundColor: 'blue'}}>
        {!!dataSource &&
        <ListView
          dataSource={dataSource}
          renderRow={renderRow}
        />}
        <Button
          title="Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}