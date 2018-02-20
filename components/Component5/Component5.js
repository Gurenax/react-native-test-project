import React from 'react'
import { Text, View, ListView, StyleSheet } from 'react-native'

const Component5 = ({
  dataSource
}) => {
  const renderRow = (user, sectionId, rowId, highlightRow) => {
    return(
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}: {user.email}</Text>
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
    !!dataSource &&
    <ListView
      dataSource={dataSource}
      renderRow={renderRow}
    />
  )
}

export default Component5