import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Home from './home/home'
import Demo from './demo/demo'

export default class RouteIndex extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact render={ ()=><Redirect to="/home"/> } />
                <Route path="/home" component={ Home } />
                <Route path="/demo" component={ Demo } />
            </Router>
        )
    }
}