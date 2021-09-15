import { Col, Container, Row } from "react-bootstrap"
import React from 'react'
import logo from '../../icons/main-logo.svg'
import './Navbar.css'


const Navlist = function () {
    return(

      <Col lg={8} className='d-flex'>
      <a className="navbar-brand" href="/"><img src={logo} alt="main-logo"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Why Dock</a>
          </li>
         
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Library</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Templates</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Library</a>
          </li>
          </ul>
      
      </div>
    </Col>
        
    )
  }

  const navbar = ()=>{
      return(
        <nav className = "navbar navbar-expand-lg Navbar ">
        <Container className = "d-block">
            <Row>
                <Navlist/>
                <Col lg={4} className="d-flex justify-content-end">
                  <div className="navbarAction">
                      <a className="loginBtn" href="/">Login</a>
                      <a className=" btn startBtn" href="/">Get started</a>
                  </div>
                </Col>
            </Row>
        </Container>
    </nav>
      )
  }
  export default navbar