import React from 'react'
import {HomePage, LoginPage, SinglePage, ListPage, NewPage} from './global/exports'
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="users">
                        <Route index element={<ListPage/>}/>
                        <Route path=":userId" element={<SinglePage/>}/>
                        <Route path="new" element={<NewPage/>}/>
                    </Route>
                    <Route path="products">
                        <Route index element={<ListPage/>}/>
                        <Route path=":productId" element={<SinglePage/>}/>
                        <Route path="new" element={<NewPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
