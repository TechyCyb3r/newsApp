import React, { Component } from 'react'
import Navbar from './Pages/Navbar'
import News from './Pages/News'
// import Home from './Pages/Home'
// import Science from './Pages/Science'
// import Technology from './Pages/Technology'
// import Health from './Pages/Health'
// import Business from './Pages/Business'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <><Navbar /></>

        <Routes>  
          <Route path="/" element={<News purl={"general"} />} />
        </Routes>

        <Routes>
          <Route path="/category/sports" element={<News purl={"sports"} />} />
        </Routes>

        <Routes>
          <Route path="/category/health" element={<News purl={"health"} />} />
        </Routes>

        <Routes>
          <Route path="/category/business" element={<News purl={"business"} />} />
        </Routes>

        <Routes>
          <Route path="/category/science" element={<News purl={"science"} />} />
        </Routes>

        <Routes>
          <Route path="/category/technology" element={<News purl={"technology"} />} />
        </Routes>

      </BrowserRouter>
    )
  }
}