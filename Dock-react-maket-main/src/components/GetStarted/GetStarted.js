import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './GetStarted.css'


const GetStarted = ()=>{
    return(
        <section className = "getStarted"> 
            <Container>
                <div className="getContent">
                    <Row >
                        <Col>
                            <div className="getTitle">
                                <h2>Get started with Dock</h2>
                                <a href="/" >get started</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default GetStarted