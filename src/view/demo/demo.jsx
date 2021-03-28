import React, { useState, useEffect, Component } from 'react';
import { BaseTest } from './react-base-test/base-test'

export default class Demo extends Component {
    state = {
        formFatherInfo: {
            form: 'father',
            aim: 'test',
            id: '007'
        },
        childComputed: 0
    }

    componentDidMount() {
        this.getChildMethods()
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
        this.setState({
            childComputed: this.refs.demoChild.sampleCalc() 
        })
        
    }

    render() {
        const { formFatherInfo, childComputed } = this.state
        return (
            <div className='demo-home'>
                <p>这里是demo的首页</p>
                {/* 测试父子组件之间的相互传值问题 */}
                <BaseTest
                    ref='demoChild'
                    info={formFatherInfo}
                    callbackParent={this.getChildValue}
                    justUseFatherMethods={this.justUseFatherMethods}
                ></BaseTest>
                {/* 父子组件调用方法测试 */}
                <p>这是子组件调用方法获取的值：{childComputed}</p>
            </div>
        )
    }
}