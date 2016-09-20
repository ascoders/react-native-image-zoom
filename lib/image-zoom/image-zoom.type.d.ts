import * as ReactNative from 'react-native';
export interface PropsDefine extends ReactNative.ViewProperties {
    onCancel?: () => void;
    cropWidth: number;
    cropHeight: number;
    imageWidth: number;
    imageHeight: number;
    panToMove?: boolean;
    pinchToZoom?: boolean;
    leaveStayTime?: number;
    leaveDistance?: number;
    horizontalOuterRangeOffset?: (offsetX?: number) => void;
    onDragLeft?: () => void;
    responderRelease?: (vx: number) => void;
    maxOverflow?: number;
    longPressTime?: number;
    onLongPress?: () => void;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    onCancle: () => void;
    onLongPress: () => void;
    panToMove: boolean;
    pinchToZoom: boolean;
    cropWidth: number;
    cropHeight: number;
    imageWidth: number;
    imageHeight: number;
    source: string;
    longPressTime: number;
    leaveStayTime: number;
    leaveDistance: number;
    maxOverflow: number;
    horizontalOuterRangeOffset: () => void;
    responderRelease: () => void;
}
export interface StateDefine {
    centerX?: number;
    centerY?: number;
}
export declare class State implements StateDefine {
    centerX: number;
    centerY: number;
}
