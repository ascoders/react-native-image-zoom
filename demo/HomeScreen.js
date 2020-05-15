import * as React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Big Image" onPress={() => navigation.navigate('BigImage')} />
    </View>
  );
};

export default HomeScreen;
