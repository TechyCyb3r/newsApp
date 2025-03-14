import React, { Component } from 'react'
import Navbar from './Pages/Navbar'
import Sports from './Pages/Sports'
import Home from './Pages/Home'
import Dancer from './Pages/Dancer'
import Singer from './Pages/Singer'
import Cricket from './Pages/Cricket'
import Hockey from './Pages/Hockey'
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
          <Route path="/category/health" element={<Cricket purl={"health"} />} />
        </Routes>

        <Routes>
          <Route path="/category/business" element={<Hockey purl={"business"} />} />
        </Routes>

        <Routes>
          <Route path="/category/science" element={<Dancer purl={"science"} />} />
        </Routes>

        <Routes>
          <Route path="/category/technology" element={<Singer purl={"technology"} />} />
        </Routes>

      </BrowserRouter>
    )
  }
}