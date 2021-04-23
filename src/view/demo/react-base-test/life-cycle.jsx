import React, {Component} from 'react'

export class LifeCycle extends Component {
    state = {

    }
    // 弃用1 👇
    // componentWillMount() {
    //     console.log('render函数之前，页面未挂载');
    // }
    // 后续版本 弃用2 👇
    //该方法 返回为 true 将会调用render函数  (以后的版本会慢慢弃用)
    // shouldComponentUpdate() {
    //     console.log('页面是否要更新？');
    //     return false
    // }
    // 弃用3 👇
    // componentWillUpdate() {
    //     console.log('页面即将更新');
    // }
    // 弃用4 👇
    // componentWillReceiveProps() {

    // }

    static getDerivedStateFromProps() {
        
        console.log('这是在render函数之前触发的');
        return 1212
    }

    componentDidMount() {
        
        console.log('页面挂载完成');
    }
    

    getSnapshotBeforeUpdate() {
        console.log('render挂载完成后，在dom更新之前触发');
        return 11111
    }

    
    
    componentDidUpdate() {
        console.log('页面更新完毕');
    }
    componentWillUnmount() {

    }
    

    render() {
        console.log('render函数执行，页面渲染');
        return (
            <div className="life-cycle">
                <p style={ {color: 'deeppink', textAlign: 'center'} }>生命周期展示页面</p>
            </div>
        )
    }
}