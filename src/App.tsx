/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import LatestNews from './pages/LatestNews/LatestNews'
import PopularNews from './pages/PopularNews/PopularNews'

const App = () => (
    <>
        <Header />
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/latest-news" element={<LatestNews />} />

                <Route path="/popular-news" element={<PopularNews />} />
            </Routes>
        </div>

        <Footer />
    </>
)

export default App
