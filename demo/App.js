import React from "react"
import { Image, Dimensions } from "react-native"
import ImageZoom from "./built/index"

export default class App extends React.Component {
  render() {
    return (
      <ImageZoom
        cropWidth={Dimensions.get("window").width}
        cropHeight={Dimensions.get("window").height}
        imageWidth={Dimensions.get("window").width}
        imageHeight={Dimensions.get("window").width}
      >
        <Image
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").width
          }}
          source={{
            uri: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460"
          }}
        />
      </ImageZoom>
    )
  }
}
