import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import CardPostScreen from './src/screens/CardPostScreen';
import Header from './src/components/Header';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{ 
            headerTitle: (props) => <Header {...props} /> ,
            headerLeft: () => 
              <Image 
                source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/nav_icon.png?raw=true'}}
                style={{width: 24, height: 24, margin: 20}}
              />,
            headerRight: () => 
              <Image 
                source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/search_icon.png?raw=true'}}
                style={{width: 24, height: 24, margin: 20}}
              />
          }}
        />
        <Stack.Screen name="Details" component={DetailScreen} 
          options={{ 
            headerTitle: (props) => <Header {...props} /> ,
            headerRight: () => 
              <Image 
                source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/search_icon.png?raw=true'}}
                style={{width: 24, height: 24, margin: 20}}
              />
          }}
        />
        <Stack.Screen name="CardPost" component={CardPostScreen} 
          options={{ 
            headerTitle: (props) => <Header {...props} /> ,
            headerRight: () => 
              <Image 
                source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/search_icon.png?raw=true'}}
                style={{width: 24, height: 24, margin: 20}}
              />
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
