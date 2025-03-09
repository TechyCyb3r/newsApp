import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    static propTypes = {}

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">MyNewsApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>

                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Sports
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark">
                                                <li><Link className="dropdown-item" to="/sports">Top Headings</Link></li>
                                                <li><Link className="dropdown-item" to="/cricket">Cricket</Link></li>
                                                <li><Link className="dropdown-item" to="/hockey">Hockey</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/singer">Singer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dancer">Dancer</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar