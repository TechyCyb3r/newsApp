import React, { Component } from 'react'
import Navbar from './Pages/Navbar'
import Sports from './Pages/Sports'
import Home from './Pages/Home'
import Science from './Pages/Science'
import Technology from './Pages/Technology'
import Health from './Pages/Health'
import Business from './Pages/Business'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <><Navbar /></>

        <Routes>
          <Route path="/" element={<Home purl={"general"} />} />
        </Routes>

        <Routes>
          <Route path="/category/sports" element={<Sports purl={"sports"} />} />
        </Routes>

        <Routes>
          <Route path="/category/health" element={<Health purl={"health"} />} />
        </Routes>

        <Routes>
          <Route path="/category/business" element={<Business purl={"business"} />} />
        </Routes>

        <Routes>
          <Route path="/category/science" element={<Science purl={"science"} />} />
        </Routes>

        <Routes>
          <Route path="/category/technology" element={<Technology purl={"technology"} />} />
        </Routes>

      </BrowserRouter>
    )
  }
}