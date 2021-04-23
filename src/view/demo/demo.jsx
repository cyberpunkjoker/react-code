import React, { Component } from 'react';

import { BaseTest } from './react-base-test/base-test'
import { LifeCycle } from './react-base-test/life-cycle'
import { LazyMode } from '../../components/lazy-mode/lazy-mode'

import './demo.css'

export default class Demo extends Component {
    state = {
        formFatherInfo: {
            form: 'father',
            aim: 'test',
            id: '007'
        },
        childComputed: 0,
        testLifeValue: 'first',
        renderList: new Array(100).fill('').map((i,idx) => i = idx)
    }
    // 需要用的组件，挂载在这里
    childBaseTest = null

    componentDidMount() {
        this.getChildMethods()
        // this.initData()
    }

    initData() {
        let arr = new Array(100).fill('').map((i,idx) => i = idx)
        this.setState({
            renderList: arr
        })
    }

    //获取子组件的值
    getChildValue = (val) => {
        console.log(val);
    }

    //子组件调用父组件的方法
    justUseFatherMethods = () => {
        this.getChildValue()
    }

    getChildMethods() {
        const value = this.childBaseTest.sampleCalc()
        this.setState({
            // childComputed: this.refs.demoChild.sampleCalc() 已经弃用了
            childComputed: value
        })
    }

    changelifeValue = () => {
        const { testLifeValue } = this.state
        this.setState({
            testLifeValue : testLifeValue + '1'
        })
    }

    render() {
        const { 
            formFatherInfo, 
            childComputed, 
            testLifeValue,
            renderList
        } = this.state
        return (
            <div className='demo-home'>
                <p>这里是demo的首页</p>
                <button onClick={this.changelifeValue}>changeValue</button>
                <p>这是用来测试生命周期的值: { testLifeValue }</p>
                
                {/* 测试父子组件之间的相互传值问题 */}
                <BaseTest
                    ref={el => this.childBaseTest = el}
                    info={formFatherInfo}
                    callbackParent={this.getChildValue}
                    justUseFatherMethods={this.justUseFatherMethods}
                ></BaseTest>
                
                {/* 父子组件调用方法测试 */}
                <p>这是子组件调用方法获取的值：{childComputed}</p>
                
                {/* 用来测试组件的生命周期问题 */}
                <LifeCycle 
                    changeValue={testLifeValue}
                ></LifeCycle>


                {/* 用来测试懒加载 dom 的问题 */}
                <LazyMode renderList={renderList}></LazyMode>
            </div>
        )
    }
}