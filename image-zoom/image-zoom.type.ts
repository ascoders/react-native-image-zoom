import * as React from 'react'
import * as ReactNative from 'react-native'

export interface PropsDefine extends ReactNative.ViewProperties {

}

export class PropsGaea {
    gaeaName = '图片手势操作'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-image-zoom'
}

export class Props extends PropsGaea implements PropsDefine {

}

export interface StateDefine {

}

export class State implements StateDefine {

}
                