import React from 'react'
import { View, TextInput, Text, Switch } from 'react-native'

const Component3 = ({
  value,
  onChangeText,
  onSubmit,
  switchValue,
  onSwitchChange
}) => {
  return (
    <View>
      <TextInput
        placeHolder='Enter Text'
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
      />
      <Text>{value}</Text>
      <Switch
        value={switchValue}
        onValueChange={onSwitchChange}
      />
    </View>
  )
}

export default Component3