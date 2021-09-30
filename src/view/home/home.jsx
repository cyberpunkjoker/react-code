import React, { Component } from 'react'
import EditTable from '@/components/edit-table/editTable'

export default class RouteIndex extends Component {
    render() {
        return (
            <div className="home-index-page">
                <p>This is home page</p>
                <EditTable></EditTable>
            </div>
        )
    }
}