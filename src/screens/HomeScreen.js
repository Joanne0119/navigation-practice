import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  const route = {
    itemId: '86',
    itemTitle: 'test'
  }

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

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
      <Pressable
        onPress={() => navigation.navigate('CardPost')}
      >
        <Text style={{ color: 'blue' }}>
          Create post
        </Text>
      </Pressable>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  )
}

export default HomeScreen