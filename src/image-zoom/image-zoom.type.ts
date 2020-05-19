import { GestureResponderEvent, PanResponderGestureState, LayoutChangeEvent, ViewStyle } from 'react-native';

export interface ICenterOn {
  x: number;
  y: number;
  scale: number;
  duration: number;
}

export interface IOnMove {
  type: string;
  positionX: number;
  positionY: number;
  scale: number;
  zoomCurrentDistance: number;
}

export interface IOnClick {
  locationX: number;
  locationY: number;
  pageX: number;
  pageY: number;
}

export class ImageZoomProps {
  /**
   * 操作区域宽度
   */
  public cropWidth: number = 100;

  /**
   * 操作区域高度
   */
  public cropHeight: number = 100;

  /**
   * 图片宽度
   */
  public imageWidth: number = 100;

  /**
   * 图片高度
   */
  public imageHeight: number = 100;

  /**
   * 单手是否能移动图片
   */
  public panToMove?: boolean = true;

  /**
   * 多手指是否能缩放
   */
  public pinchToZoom?: boolean = true;

  /**
   * 双击能否放大
   */
  public enableDoubleClickZoom?: boolean = true;

  /**
   * 单击最大位移
   */
  public clickDistance?: number = 10;

  /**
   * 最大滑动阈值
   */
  public maxOverflow?: number = 100;

  /**
   * 长按的阈值（毫秒）
   */
  public longPressTime?: number = 800;

  /**
   * 双击计时器最大间隔
   */
  public doubleClickInterval?: number = 175;

  /**
   * If provided this will cause the view to zoom and pan to the center point
   * Duration is optional and defaults to 300 ms.
   */
  public centerOn?: ICenterOn;

  public style?: ViewStyle = {};

  /**
   * threshold for firing swipe down function
   */
  public swipeDownThreshold?: number = 230;

  /**
   * for enabling vertical movement if user doesn't want it
   */
  public enableSwipeDown?: boolean = false;

  /**
   * for disabling focus on image center if user doesn't want it
   */
  public enableCenterFocus?: boolean = true;

  /**
   * for disabling rendering to hardware texture on Android
   */
  public useHardwareTextureAndroid?: boolean = true;

  /**
   * minimum zoom scale
   */
  public minScale?: number = 0.6;

  /**
   * maximum zoom scale
   */
  public maxScale?: number = 10;

  /**
   * 是否启用原生动画驱动
   * Whether to use native code to perform animations.
   */
  public useNativeDriver?: boolean = false;

  /**
   * 单击的回调
   */
  public onClick?: (eventParams: IOnClick) => void = () => {
    //
  };

  /**
   * 双击的回调
   */
  public onDoubleClick?: (eventParams: IOnClick) => void = () => {
    //
  };

  /**
   * 长按的回调
   */
  public onLongPress?: (eventParams: IOnClick) => void = () => {
    //
  };

  /**
   * 横向超出的距离，父级做图片切换时，可以监听这个函数
   * 当此函数触发时，可以做切换操作
   */
  public horizontalOuterRangeOffset?: (offsetX: number) => void = () => {
    //
  };

  /**
   * 触发想切换到左边的图，向左滑动速度超出阈值时触发
   */
  public onDragLeft?: () => void = () => {
    //
  };

  /**
   * 松手但是没有取消看图的回调
   */
  public responderRelease?: (vx: number, scale: number) => void = () => {
    //
  };

  /**
   * If provided, this will be called everytime the map is moved
   */
  public onMove?: (position: IOnMove) => void = () => {
    //
  };

  /**
   * If provided, this method will be called when the onLayout event fires
   */
  public layoutChange?: (event: LayoutChangeEvent) => void = () => {
    //
  };

  /**
   * function that fires when user swipes down
   */
  public onSwipeDown?: () => void = () => {
    //
  };

  /**
   * Allows defining the onMoveShouldSetResponder behavior.
   */
  public onMoveShouldSetPanResponder?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => boolean;

  /**
   * Allows overriding the default onStartShouldSetPanResponder behavior.
   * By default, always becomes the responder
   */
  public onStartShouldSetPanResponder?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => boolean = () => true;

  /**
   * Allows overriding the default onPanResponderTerminationRequest behavior.
   * By default, doesn't terminate until the press ends
   */
  public onPanResponderTerminationRequest?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => boolean = () => false;
}

export class ImageZoomState {
  /**
   * 中心 x 坐标
   */
  public centerX?: number = 0.5;
  /**
   * 中心 y 坐标
   */
  public centerY?: number = 0.5;
}
