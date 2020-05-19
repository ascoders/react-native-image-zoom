import React, { useState } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import ImageZoom from './built/index';

const formatEventData = (evt) => {
  const { locationX, locationY, pageX, pageY } = evt;
  return `x ${locationX.toFixed(2)} y ${locationY.toFixed(2)} pageX ${pageX.toFixed(2)} pageY ${pageY.toFixed(2)}`;
};

const DebugImage = () => {
  const [longPressData, setLongPressData] = useState("LongPress: Haven't long pressed yet");
  const [doubleClickData, setDoubleClickData] = useState("DoubleClick: Haven't doubleclicked yet");
  const longPressHandler = (evt) => {
    const data = formatEventData(evt);
    setLongPressData(`LongPress: ${data}`);
  };
  const doubleClickHandler = (evt) => {
    const data = formatEventData(evt);
    setDoubleClickData(`DoubleClick: ${data}`);
  };
  return (
    <View>
      <Text>{longPressData}</Text>
      <Text>{doubleClickData}</Text>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={Dimensions.get('window').width}
        imageHeight={Dimensions.get('window').height}
        enableSwipeDown={true}
        onLongPress={longPressHandler}
        onDoubleClick={doubleClickHandler}
      >
        <Image
          enableHorizontalBounce={true}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          source={{
            uri:
              'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522606437962&di=f93f5c645225a5681155ebcde27b257f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0159fa5944bcd3a8012193a34b762d.jpg%402o.jpg',
          }}
        />
      </ImageZoom>
    </View>
  );
};

export default DebugImage;
