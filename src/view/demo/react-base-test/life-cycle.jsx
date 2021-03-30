import React, {Component} from 'react'

export class LifeCycle extends Component {
    state = {

    }
    // componentWillMount() {
    //     console.log('render函数之前，页面未挂载');
    // }
    componentDidMount() {
        console.log('页面挂载完成');
    }
    //该方法 返回为 true 将会调用render函数
    // shouldComponentUpdate() {
    //     console.log('页面是否要更新？');
    //     return false
    // }
    // componentWillUpdate() {
    //     console.log('页面即将更新');
    // }
    // componentDidUpdate() {
    //     console.log('页面更新完毕');
    // }
    componentWillUnmount() {

    }
    // componentWillReceiveProps() {

    // }

    render() {
        console.log('render函数执行，页面渲染');
        return (
            <div className="life-cycle">
                <p style={ {color: 'deeppink', textAlign: 'center'} }>生命周期展示页面</p>
            </div>
        )
    }
}