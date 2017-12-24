import React from 'react';
import { Image, Dimensions } from 'react-native';
import ImageZoom from './built/index';

export default class App extends React.Component {
  render() {
    return (
      <ImageZoom cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={200}
        imageHeight={200}>
        <Image style={{ width: 200, height: 200 }}
          source={{ uri: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460' }} />
      </ImageZoom>
    );
  }
}
