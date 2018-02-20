import React from 'react'
import { Text, View, ListView, StyleSheet } from 'react-native'

const Component4 = () => {
  const users = [
    {name: 'John Doe'},
    {name: 'Brad Traversy'},
    {name: 'Steve Smith'},
    {name: 'Janet Williams'}
  ]
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  const userDataSource = ds.cloneWithRows(users)

  const renderRow = (user, sectionId, rowId, highlightRow) => {
    return(
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
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

  return (
    !!userDataSource &&
    <ListView
      dataSource={userDataSource}
      renderRow={renderRow}
    />
  )
}

export default Component4