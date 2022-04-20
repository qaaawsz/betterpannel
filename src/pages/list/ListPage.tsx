import React from 'react'
import './listpage.scss'
import {Database, Navbar, Sidebar} from '../../global/exports'

const ListPage: React.FC<{ title: string }> = ({title}) => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Database title={title}/>
            </div>
        </div>
    )
}

export default ListPage
