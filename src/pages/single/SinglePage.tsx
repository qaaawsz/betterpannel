import React from 'react'
import {Chart, CustomTable, Navbar, Sidebar} from '../../global/exports'
import './singlepage.scss'

const SinglePage = () => {
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h2 className="title">
                            Information
                        </h2>
                        <div className="item">
                            <img
                                src="https://avatars.githubusercontent.com/u/101413829?v=4"
                                alt="Avatar"
                                className="itemImage"
                            />
                            <div className="details">
                                <h2 className="itemTitle">
                                    Jane Doe
                                </h2>
                                <div className="detailItem">
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone: </span>
                                    <span className="itemValue">0 55 123 54 76</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address: </span>
                                    <span className="itemValue">Elton St. 234, Garden Yd. NewYork</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country: </span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart title="User Spendings(Last Year)" aspectX={3} aspectY={1}/>
                    </div>
                </div>
                <div className="bottom">
                    <h2 className="title">
                        Last Transactions
                    </h2>
                    <CustomTable/>
                </div>
            </div>
        </div>
    )
}

export default SinglePage
