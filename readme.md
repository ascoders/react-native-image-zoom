## Show Cases

> Zoom while sliding

![3.gif](https://cloud.githubusercontent.com/assets/7970947/18501092/87d5efe8-7a80-11e6-9234-516b2be1e729.gif)

> Intelligent zoom

![2.gif](https://cloud.githubusercontent.com/assets/7970947/18501091/87b14d8c-7a80-11e6-904d-8c434e1904ce.gif)

## Getting Started

### Installation

```bash
npm i react-native-image-pan-zoom --save
```

### Basic Usage

- Install react-native first

```bash
$ npm i react-native -g
```

- Initialization of a react-native project

```bash
$ react-native init myproject
```

- Then, edit myproject/index.ios.js, like this:

```typescript
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Modal
} from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';

class ImageZoom extends React.Component {
    render: function() {
        return (
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image style={{width:200, height:200}}
                       source={{uri:'http://v1.qzone.cc/avatar/201407/07/00/24/53b9782c444ca987.jpg!200x200.jpg'}}/>
            </ImageZoom>
        )
    }
}

AppRegistry.registerComponent('myproject', () => ImageZoom);
```

### Document

![image](https://cloud.githubusercontent.com/assets/7970947/18501378/8830292a-7a82-11e6-9994-8c31ae0e6883.png)