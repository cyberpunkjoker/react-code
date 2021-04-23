import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

import './lazy.css'

export class LazyMode extends Component {
    state = {
        showList: []
    }
    
    componentDidMount () {
        this.initShowList()
    }

    initShowList() {
        const { renderList } = this.props
        console.log(this.props);
        let arr = renderList.slice(0,10)
        this.setState({
            showList: arr
        })
    }

    render() {
        const { showList } = this.state
        return (
            <div className="lazy-mode-content">
                {
                    showList.map(i=>{
                        return (
                            <div key={i} className='lazy-item'> {i} </div>
                        )
                    }
                )}
            </div>
        )
    }
}