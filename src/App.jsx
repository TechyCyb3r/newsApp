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
          <Route path="/" element={<News purl={"general"} headline={"News Headlines"} />} />
        </Routes>

        <Routes>
          <Route path="/category/sports" element={<News purl={"sports"}  headline={"Sports Headlines"}/>} />
        </Routes>

        <Routes>
          <Route path="/category/health" element={<News purl={"health"}  headline={"Health Headlines"}/>} />
        </Routes>

        <Routes>
          <Route path="/category/business" element={<News purl={"business"}  headline={"Business Headlines"}/>} />
        </Routes>

        <Routes>
          <Route path="/category/science" element={<News purl={"science"}  headline={"Science Headlines"}/>} />
        </Routes>

        <Routes>
          <Route path="/category/technology" element={<News purl={"technology"}  headline={"Technology Headlines"}/>} />
        </Routes>

      </BrowserRouter>
    )
  }
}