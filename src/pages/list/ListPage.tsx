import React from 'react'
import './listpage.scss'
import {Database, Navbar, Sidebar} from '../../global/exports'

const ListPage = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Database/>
            </div>
        </div>
    )
}

export default ListPage
