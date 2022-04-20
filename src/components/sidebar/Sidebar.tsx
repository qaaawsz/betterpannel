import React from 'react'
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

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">
                    BetterPannel
                </span>
            </div>
            <hr/>

            <div className="center">
                <ul>
                    <p className="title">
                        MAIN
                    </p>
                    <li>
                        <DashboardOutlined className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonOutlineOutlined className="icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <StoreOutlined className="icon"/>
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardOutlined className="icon"/>
                        <span>Order</span>
                    </li>
                    <li>
                        <LocalShippingOutlined className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">
                        USEFUL
                    </p>
                    <li>
                        <InsertChartOutlined className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlined className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">
                        SERVICE
                    </p>
                    <li>
                        <SettingsSystemDaydreamOutlined className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlined className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <AppSettingsAltOutlined className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">
                        USER
                    </p>
                    <li>
                        <AccountCircleOutlined className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppOutlined className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"/>
                <div className="colorOption"/>
            </div>
        </div>
    )
}

export default Sidebar
