import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import BigImage from './BigImage';
import DebugImage from './DebugImage';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Rereact-native-image-pan-zoom' }} />
          <Stack.Screen name="BigImage" component={BigImage} options={{ title: 'Big Image' }} />
          <Stack.Screen name="DebugImage" component={DebugImage} options={{ title: 'Debug Image' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
