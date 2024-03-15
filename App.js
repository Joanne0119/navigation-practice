import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import CardPostScreen from './src/screens/CardPostScreen';
import Header from './src/components/Header';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return(
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
    </Stack.Navigator>
    )
}

const CardPostStackNavigator = () => {
  return(
    <Stack.Navigator>
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
  )
}

const BottomTopNavigator = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="card" component={CardPostStackNavigator} />
    </Tab.Navigator>
  )
}

const DrawerNavigator = () => {
  return( 
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTopNavigator} />
      <Drawer.Screen name="CardPost" component={CardPostStackNavigator} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <StatusBar />
      <DrawerNavigator />
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
