import React, { Component } from 'react';
import './nav'
import './nav.css'
import logo from '../../logo.svg'

export default class NavbarComp extends Component {
    render() {
        return (
            <nav>
                <a href="/"><img src={logo} className="nav-logo" alt="logo" width="50px" height="50px" /></a>
                <ul>
                    <li><a href="/">Home</a>
                    </li>
                    <li><a href="/">About</a>
                    </li>
                    <li><a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}