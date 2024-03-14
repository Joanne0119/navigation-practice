import { View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'

const CardPostScreen = ({ navigation, route }) => {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Pressable
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      >
        <Text>
          Done
        </Text>
      </Pressable>
    </>
  );
}

export default CardPostScreen