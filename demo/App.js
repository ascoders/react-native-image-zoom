import React from 'react';
import { Image, Dimensions } from 'react-native';
import ImageZoom from './built/index';

export default class App extends React.Component {
  render() {
    return (
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={Dimensions.get('window').width}
        imageHeight={Dimensions.get('window').height}
        enableSwipeDown={true}
      >
        <Image
          enableHorizontalBounce={true}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
          }}
          source={{
            uri:
              'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522606437962&di=f93f5c645225a5681155ebcde27b257f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0159fa5944bcd3a8012193a34b762d.jpg%402o.jpg'
          }}
        />
      </ImageZoom>
    );
  }
}
