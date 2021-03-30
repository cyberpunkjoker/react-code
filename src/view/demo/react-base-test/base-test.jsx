import React, { Component } from 'react';
export class BaseTest extends Component {
    state = {
        inputValue: undefined,
        numA: 123,
        numB: 234
    }

    changeValue = (e) => {
        let newValue = this.state.inputValue
        this.setState({
            inputValue: e.target.value
        })
        this.props.callbackParent(newValue)
        this.props.justUseFatherMethods()
    }
    // 渲染表单实现双向绑定
    renderInputContent() {
        let { inputValue } = this.state
        return (
            <div>
                <p>this is display content: {inputValue}</p>
                <input onChange={this.changeValue} type="text"/>
            </div>
        ) 
    }

    // 子组件方法
    sampleCalc() {
        let {numA, numB} = this.state
        return numA + numB
    }

    render() {
        let obj = this.props
        console.log(obj);
        return (
            <div className='base-demos'>
                <p>用来测试react的一些基础知识</p>
                {this.renderInputContent()}
            </div>
        )
    }
}