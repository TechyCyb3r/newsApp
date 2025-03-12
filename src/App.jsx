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
      <><BrowserRouter>
        <><Navbar /></>

        <Routes>
          <Route path="/" element={<Home purl={"everything"} psize={15} />} />
        </Routes>

        <Routes>
          <Route path="/sports" element={<Sports purl={"sports"} psize={18} />} />
        </Routes>

        <Routes>
          <Route path="/cricket" element={<Cricket purl={"cricket"} psize={18} />} />
        </Routes>

        <Routes>
          <Route path="/hockey" element={<Hockey purl={"hockey"} psize={18} />} />
        </Routes>

        <Routes>
          <Route path="/dancer" element={<Dancer purl={"dancer"} psize={18} />} />
        </Routes>

        <Routes>
          <Route path="/singer" element={<Singer purl={"singer"} psize={18} />} />
        </Routes>

      </BrowserRouter>
      <p>My Secrete key: {import.meta.env.VITE_KEY}</p>
      </>
    )
  }
}