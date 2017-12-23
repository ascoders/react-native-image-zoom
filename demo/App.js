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
          source={{ uri: 'http://v1.qzone.cc/avatar/201407/07/00/24/53b9782c444ca987.jpg!200x200.jpg' }} />
      </ImageZoom>
    );
  }
}
