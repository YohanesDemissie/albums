import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({ size }) => { //arbitrary prop: size
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'}/>
    </View>
  )
}

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300
  }
}

export { Spinner };