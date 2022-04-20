import React from 'react'
import './navbar.scss'
import {
    ChatBubbleOutline,
    DarkModeOutlined,
    FullscreenOutlined,
    LanguageOutlined,
    ListOutlined,
    NotificationsNoneOutlined,
    SearchOutlined
} from '@mui/icons-material'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <SearchOutlined className='inputIcon'/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon"/>
                        <span>English</span>
                    </div>
                    <div className="item">
                        <DarkModeOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <FullscreenOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icon"/>
                        <div className="counter">3</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutline className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ListOutlined className="icon"/>
                    </div>

                    <div className="item">
                        <img
                            className="avatar"
                            src="https://avatars.githubusercontent.com/u/101413829?v=4"
                            alt="Avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
