import React, { Component } from 'react'
import Navbar from './Pages/Navbar'
import News from './Pages/News'

export default class App extends Component {
  c = 'jhon'
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
 