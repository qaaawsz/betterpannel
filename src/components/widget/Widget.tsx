import React from 'react'
import './widget.scss'
import {
    KeyboardArrowUpOutlined,
    PersonOutline,
    AccountBalanceOutlined,
    ShoppingCartOutlined,
    MonetizationOnOutlined
} from '@mui/icons-material'

interface IWidget {
    type: string
}

const Widget: React.FC<IWidget> = ({type}) => {
    let data = {
        title: '',
        isMoney: false,
        amount: 0,
        percentage: 0,
        link: '',
        icon: (<></>)
    }

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                amount: 24956,
                percentage: 60,
                link: 'View all users',
                icon: (
                    <PersonOutline
                        className="icon"
                        style={{
                            color: 'crimson',
                            backgroundColor: 'rgba(255, 0, 0 , 0.2)'
                        }}
                    />
                )
            }
            break
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                amount: 9410,
                percentage: 25,
                link: 'View all orders',
                icon: (<ShoppingCartOutlined
                        className="icon"
                        style={{
                            color: 'goldenrod',
                            backgroundColor: 'rgba(218, 165, 32 , 0.2)'
                        }}
                    />
                )
            }
            break
        case 'earnings':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                amount: 10500,
                percentage: 140,
                link: 'View all earnings',
                icon: (<MonetizationOnOutlined
                        className="icon"
                        style={{
                            color: 'green',
                            backgroundColor: 'rgba(0, 128, 0, 0.2)'
                        }}
                    />
                )
            }
            break
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                amount: 12953,
                percentage: 0,
                link: 'See balance',
                icon: (<AccountBalanceOutlined
                        className="icon"
                        style={{
                            color: 'purple',
                            backgroundColor: 'rgba(128, 0, 128, 0.2)'
                        }}
                    />
                )
            }
            break
        default:
            break
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && '$'}{data.amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlined/>
                    {data.percentage}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
