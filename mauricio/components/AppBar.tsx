import { View, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'

const AppBar = () => {
  return (
    <Appbar.Header style={{ backgroundColor: '#cc6060' }}>
      {/* <Appbar.Action icon="menu" /> */}
      <Appbar.Content title="CFSI App" color='white' />
      {/* Service Type */}
      {/* Address */}
      {/* Search Bar */}
      {/* Theme Switch */}
      <Appbar.Action icon="basket" color='white' />
    </Appbar.Header>

  )
}

export default AppBar