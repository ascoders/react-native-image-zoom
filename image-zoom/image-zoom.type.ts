import * as ReactNative from 'react-native'

export interface PropsDefine extends ReactNative.ViewProperties {
    /**
     * 单击的回调
     */
    onClick?: ()=>void

    /**
     * 操作区域宽度
     */
    cropWidth: number

    /**
     * 操作区域高度
     */
    cropHeight: number

    /**
     * 图片宽度
     */
    imageWidth: number

    /**
     * 图片高度
     */
    imageHeight: number

    /**
     * 单手是否能移动图片
     */
    panToMove?: boolean

    /**
     * 多手指是否能缩放
     */
    pinchToZoom?: boolean

    /**
     * 手指按住少于多少毫秒认为是退出
     */
    leaveStayTime?: number

    /**
     * 手指按住后位移少于多少认为是退出
     */
    leaveDistance?: number

    /**
     * 横向超出的距离，父级做图片切换时，可以监听这个函数
     * 当此函数触发时，可以做切换操作
     */
    horizontalOuterRangeOffset?: (offsetX?: number)=>void

    /**
     * 触发想切换到左边的图，向左滑动速度超出阈值时触发
     */
    onDragLeft?: ()=>void

    /**
     * 松手但是没有取消看图的回调
     */
    responderRelease?: (vx?: number, scale?: number)=>void

    /**
     * 最大滑动阈值
     */
    maxOverflow?: number

    /**
     * 长按的阈值（毫秒）
     */
    longPressTime?: number

    /**
     * 长按的回调
     */
    onLongPress?: ()=>void

    /**
     * 双击的回调
     */
    onDoubleClick?: ()=>void

    /**
     * 透传
     */
    others?: any
}

export class PropsGaea {
    gaeaName = '图片手势操作'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-image-zoom'
}

export class Props extends PropsGaea implements PropsDefine {
    onClick = ()=> {
    }
    onLongPress = ()=> {
    }
    panToMove = true
    pinchToZoom = true
    cropWidth = 100
    cropHeight = 100
    imageWidth = 100
    imageHeight = 100
    source = ''
    longPressTime = 800
    leaveStayTime = 100
    leaveDistance = 10
    maxOverflow = 100
    horizontalOuterRangeOffset = ()=> {
    }
    responderRelease = ()=> {
    }
    onDoubleClick = ()=> {
    }
}

export interface StateDefine {
    /**
     * 中心 x 坐标
     */
    centerX?: number
    /**
     * 中心 y 坐标
     */
    centerY?: number
}

export class State implements StateDefine {
    centerX = 0.5
    centerY = 0.5
}
                
