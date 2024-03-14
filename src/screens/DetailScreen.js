import { View, Text, Pressable } from 'react-native'
import React from 'react'

const DetailScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Pressable
        onPress={() => navigation.push('Details')}
      >
        <Text style={{ color: 'blue' }}>
          Go to Details ...again
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={{ color: 'blue' }}>
          Go Home
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: 'blue' }}>
          Go Back
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.popToTop()}
      >
        <Text style={{ color: 'blue' }}>
          Go Back to the First Screen
        </Text>
      </Pressable>
  </View>
  )
}

export default DetailScreen