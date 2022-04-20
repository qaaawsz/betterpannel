import React from 'react'
import './featured.scss'
import {KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, MoreVertOutlined} from '@mui/icons-material'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">
                    Total Revenue
                </h1>
                <MoreVertOutlined fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={50} text="70%" strokeWidth={3}/>
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <p className="description">Previous transactions processing. Recent payments may not be included.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">
                            Target
                        </div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlined fontSize="small"/>
                            <div className="resultAmount">
                                16.5K
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">
                            Last Week
                        </div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlined fontSize="small"/>
                            <div className="resultAmount">
                                16.5K
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">
                            Last Month
                        </div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlined fontSize="small"/>
                            <div className="resultAmount">
                                16.5K
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
