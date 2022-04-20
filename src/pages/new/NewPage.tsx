import React, {useState} from 'react'
import './newpage.scss'
import {Navbar, Sidebar} from '../../global/exports'
import './newpage.scss'
import {DriveFolderUploadOutlined} from '@mui/icons-material'

const userInputs = [
    {
        id: 1,
        label: 'Username',
        type: 'text',
        placeholder: 'john_doe',
    },
    {
        id: 2,
        label: 'Name and surname',
        type: 'text',
        placeholder: 'John Doe',
    },
    {
        id: 3,
        label: 'Email',
        type: 'mail',
        placeholder: 'john_doe@gmail.com',
    },
    {
        id: 4,
        label: 'Phone',
        type: 'text',
        placeholder: '+1 234 567 89',
    },
    {
        id: 5,
        label: 'Password',
        type: 'password',
    },
    {
        id: 6,
        label: 'Address',
        type: 'text',
        placeholder: 'Elton St. 216 NewYork',
    },
    {
        id: 7,
        label: 'Country',
        type: 'text',
        placeholder: 'USA',
    },
]

const productInputs = [
    {
        id: 1,
        label: 'Title',
        type: 'text',
        placeholder: 'Apple Macbook Pro',
    },
    {
        id: 2,
        label: 'Description',
        type: 'text',
        placeholder: 'Description',
    },
    {
        id: 3,
        label: 'Category',
        type: 'text',
        placeholder: 'Computers',
    },
    {
        id: 4,
        label: 'Price',
        type: 'text',
        placeholder: '100',
    },
    {
        id: 5,
        label: 'Stock',
        type: 'text',
        placeholder: 'in stock',
    },
]

const NewPage: React.FC<{ title: string }> = ({title}) => {
    const [file, setFile] = useState<any>('')

    let inputs = title === 'New User' ? userInputs : productInputs

    return (
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlined className="icon"/>
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e: any) => setFile(e.target.files[0])}
                                    style={{display: 'none'}}
                                />
                            </div>

                            {inputs.map((input: any) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder}/>
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPage
