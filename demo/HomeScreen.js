import * as React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
      <Button title="Debug Image" onPress={() => navigation.navigate('DebugImage')} />
      <Button title="Big Image" onPress={() => navigation.navigate('BigImage')} />
    </View>
  );
};

export default HomeScreen;
