import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  const route = {
    itemId: '86',
    itemTitle: 'test'
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Details', route)}
      >
        <Text style={{ color: 'blue' }}>
          Go to Details
        </Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen