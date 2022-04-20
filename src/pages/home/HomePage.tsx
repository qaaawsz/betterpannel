import React from 'react'
import './homepage.scss'
import {Navbar, Sidebar, Widget, Featured, Chart, CustomTable} from '../../global/exports'

const HomePage = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earnings"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart title="Last Year (Revenue)"/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Latest Transactions
                    </div>
                    <CustomTable/>
                </div>
            </div>
        </div>
    )
}

export default HomePage
