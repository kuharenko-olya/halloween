import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from './layout/Header/Header.jsx';
import {Hero} from './components/Hero/Hero.jsx';
import {Gallery} from './components/Gallery/Gallery.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {About} from "./components/About/About.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <Hero/>
            <Gallery/>
            <About/>
        </BrowserRouter>
    </React.StrictMode>
)
