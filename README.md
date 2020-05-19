## Show Cases
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

- Install create-react-native-app first

```bash
$ npm install -g create-react-native-app
```

- Initialization of a react-native project

```bash
$ create-react-native-app AwesomeProject
```

- Then, edit `AwesomeProject/App.js`, like this:

```typescript
import { Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default class App extends React.Component {
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
```

### Document

| Props | Type | Description | DefaultValue |
| --- | --- | --- | --- |
| **cropWidth(required)** | number | operating area width | 100 |
| **cropHeight(required)** | number | operating area height | 100 |
| **imageWidth(required)** | number | picture width | 100 |
| **imageHeight(required)** | number | picture height | 100 |
| onClick | (eventParams: [IOnClick](https://github.com/ascoders/react-native-image-zoom/blob/master/src/image-zoom/image-zoom.type.ts))=>void | onClick | ()=>{} |
| onDoubleClick | (eventParams: [IOnClick](https://github.com/ascoders/react-native-image-zoom/blob/master/src/image-zoom/image-zoom.type.ts))=>void | onDoubleClick | ()=>{} |
| panToMove | boolean | allow to move picture with one finger | true |
| pinchToZoom | boolean | allow scale with two fingers | true |
| clickDistance | number | how many finger movement can also trigger `onClick` | 10 |
| horizontalOuterRangeOffset | (offsetX?: number)=>void | horizontal beyond the distance, the parent to do picture switching, you can listen to this function. When this function is triggered, you can do the switch operation | ()=>{} |
| onDragLeft | ()=>void | trigger to switch to the left of the graph, the left sliding speed exceeds the threshold when triggered | ()=>{} |
| responderRelease | (vx: number)=>void | let go but do not cancel | ()=>{} |
| maxOverflow | number | maximum sliding threshold | 100 |
| longPressTime | number | long press threshold | 800 |
| onLongPress | (eventParams: [IOnClick](https://github.com/ascoders/react-native-image-zoom/blob/master/src/image-zoom/image-zoom.type.ts))=>void | on longPress | ()=> {} |
| doubleClickInterval | number | time allocated for second click to be considered as doublClick event | 175 |
| onMove | ( position: [IOnMove](https://github.com/ascoders/react-native-image-zoom/blob/master/src/image-zoom/image-zoom.type.ts) )=>void | reports movement position data (helpful to build overlays) | ()=> {} |
| centerOn | { x: number, y: number, scale: number, duration: number } | if given this will cause the map to pan and zoom to the desired location | undefined |
| enableSwipeDown | boolean | for enabling vertical movement if user doesn't want it | false |
| enableCenterFocus | boolean | for disabling focus on image center if user doesn't want it | true |
| onSwipeDown | () => void | function that fires when user swipes down | null |
| swipeDownThreshold | number | threshold for firing swipe down function | 230 |
| minScale | number | minimum zoom scale | 0.6 |
| maxScale | number | maximum zoom scale | 10 |
| useNativeDriver | boolean | Whether to animate using [`useNativeDriver`](https://reactnative.dev/docs/animations#using-the-native-driver) | false |
| onStartShouldSetPanResponder | () => boolean | Override onStartShouldSetPanResponder behavior | () => true |
| onMoveShouldSetPanResponder | () => boolean | Override onMoveShouldSetPanResponder behavior | undefined |
| onPanResponderTerminationRequest | () => boolean | Override onMoveShouldSetPanResponder behavior | () => false |
| useHardwareTextureAndroid | boolean | for disabling rendering to hardware texture on Android | true |

| Method | params | Description |
| --- | --- | --- |
| reset |  | Reset the position and the scale of the image |
| resetScale |  | Reset the scale of the image |
| centerOn | ICenterOn | Centers the image in the position indicated. ICenterOn={ x: number, y: number, scale: number, duration: number } |

## Development pattern

### Step 1, run TS listener

After clone this repo, then:

```bash
npm install
npm start
```

### Step 2, run demo

```bash
cd demo
npm install
npm start
```

Then, scan the QR, use your [expo app](https://expo.io./).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://kingdaro.net"><img src="https://avatars1.githubusercontent.com/u/19603573?v=4" width="100px;" alt=""/><br /><sub><b>Darius</b></sub></a><br /><a href="https://github.com/ascoders/react-native-image-zoom/commits?author=kingdaro" title="Code">💻</a></td>
    <td align="center"><a href="https://tpxp.ddns.net"><img src="https://avatars2.githubusercontent.com/u/7191841?v=4" width="100px;" alt=""/><br /><sub><b>Thomas P.</b></sub></a><br /><a href="https://github.com/ascoders/react-native-image-zoom/commits?author=TPXP" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ditorojuan"><img src="https://avatars0.githubusercontent.com/u/22530892?v=4" width="100px;" alt=""/><br /><sub><b>Juan Di Toro</b></sub></a><br /><a href="https://github.com/ascoders/react-native-image-zoom/commits?author=ditorojuan" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/AlhaythamElhassan"><img src="https://avatars0.githubusercontent.com/u/20684701?v=4" width="100px;" alt=""/><br /><sub><b>Alhaytham Elhassan</b></sub></a><br /><a href="https://github.com/ascoders/react-native-image-zoom/commits?author=AlhaythamElhassan" title="Code">💻</a></td>
    <td align="center"><a href="http://alexandrius.com"><img src="https://avatars3.githubusercontent.com/u/5978212?v=4" width="100px;" alt=""/><br /><sub><b>Alexander Pataridze</b></sub></a><br /><a href="https://github.com/ascoders/react-native-image-zoom/commits?author=alexandrius" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/pxpeterxu"><img src="https://avatars1.githubusercontent.com/u/2924388?v=4" width="100px;" alt=""/><br /><sub><b>Peter Xu</b></sub></a><br /><a href="https://github.com/ascoders/react-native-image-zoom/commits?author=pxpeterxu" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!