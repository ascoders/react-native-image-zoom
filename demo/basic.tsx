import * as React from 'react'
import {observer} from 'mobx-react'
import ImageZoom from '../index'

@observer
export default class Demo extends React.Component <any, any> {
    static title = '基本用法'
    static description = ``

    render() {
        return (
            <ImageZoom cropWidth={200}
                       cropHeight={200}
                       imageWidth={100}
                       imageHeight={100}/>
        )
    }
}
                