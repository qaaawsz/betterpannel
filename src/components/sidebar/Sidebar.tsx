import React, {useContext} from 'react'
import './sidebar.scss'
import {
    DashboardOutlined,
    PersonOutlineOutlined,
    StoreOutlined,
    ExitToAppOutlined,
    AccountCircleOutlined,
    AppSettingsAltOutlined,
    PsychologyOutlined,
    SettingsSystemDaydreamOutlined,
    NotificationsNoneOutlined,
    InsertChartOutlined,
    LocalShippingOutlined, CreditCardOutlined
} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import {DarkModeContext} from '../../context/DarkModeContext'

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" className="link">
                    <span className="logo">BetterPannel</span>
                </Link>
            </div>
            <hr/>

            <div className="center">
                <ul>
                    <p className="title">
                        MAIN
                    </p>
                    <Link to="/" className="link">
                        <li>
                            <DashboardOutlined className="icon"/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" className="link">
                        <li>
                            <PersonOutlineOutlined className="icon"/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" className="link">
                        <li>
                            <StoreOutlined className="icon"/>
                            <span>Products</span>
                        </li>
                    </Link>
                    <li className="disabled">
                        <CreditCardOutlined className="icon"/>
                        <span>Order</span>
                    </li>
                    <li className="disabled">
                        <LocalShippingOutlined className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">
                        USEFUL
                    </p>
                    <li className="disabled">
                        <InsertChartOutlined className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li className="disabled">
                        <NotificationsNoneOutlined className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">
                        SERVICE
                    </p>
                    <li className="disabled">
                        <SettingsSystemDaydreamOutlined className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li className="disabled">
                        <PsychologyOutlined className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li className="disabled">
                        <AppSettingsAltOutlined className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">
                        USER
                    </p>
                    <li className="disabled">
                        <AccountCircleOutlined className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li className="disabled">
                        <ExitToAppOutlined className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type: 'LIGHT'})}/>
                <div className="colorOption" onClick={() => dispatch({type: 'DARK'})}/>
            </div>
        </div>
    )
}

export default Sidebar
