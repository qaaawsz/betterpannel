import React, {useContext} from 'react'
import {HomePage, LoginPage, SinglePage, ListPage, NewPage} from './global/exports'
import {Route, Routes} from 'react-router-dom'
import './global/dark.scss'
import {DarkModeContext} from './context/DarkModeContext'

function App() {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div className={darkMode ? 'app dark' : 'app'}>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="users">
                        <Route index element={<ListPage title="Add New User"/>}/>
                        <Route path=":userId" element={<SinglePage/>}/>
                        <Route path="new" element={<NewPage title="New User"/>}/>
                    </Route>
                    <Route path="products">
                        <Route index element={<ListPage title="Add New Product"/>}/>
                        <Route path=":productId" element={<SinglePage/>}/>
                        <Route path="new" element={<NewPage title="New Product"/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
