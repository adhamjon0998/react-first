import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer'
import Logo from '../../icons/main-logo.svg'
import './Footer.css'

class Footer extends React.Component{

    render(){
        return(
            <section className="footer">
                <Container>
                    <Row>
                    <Col lg={3}>
                        <div className="footerLogo">
                            <a href="/"><img src={Logo} alt="footer-pic"/></a>
                            <p className="copyright">Copyright © 2021 Dock Labs, Inc.</p>
                             <span>All rights reserved.</span>   
                         </div>
                    </Col>
                    <Col lg={3}>
                        <ul className="footerList">
                            <li><a href="/">Legal</a></li>
                            <li><a href="/">Terms of Service</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Privacy Request</a></li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                    <ul className="footerList">
                            <li><a href="/">Support</a></li>
                            <li><a href="/">Help Center</a></li>
                            <li><a href="/">support@dock.us</a></li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                    <ul className="footerList">
                            <li><a href="/">General</a></li>
                            <li><a href="/">Request Invite</a></li>
                            <li><a href="/">Twitter</a></li>
                        </ul>
                    </Col>
                    </Row>
                </Container>

            </section>
        )
    }

}

export default Footer