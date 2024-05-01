import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './layout/Header/Header.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    </React.StrictMode>
)
