import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Transform.css'
import Social from  '../../icons/social.png'
import TransformPic from '../../images/media.png'



const DemoText = ()=>{
    return(
       <div className="topText">
            <h2 className="textTitle">Transform the customer experience from demo to onboarding and beyond</h2>
            <p className="subText">Personalized spaces that make you look professional.</p>
       </div>
    )
}


const Clients = ()=>{
    return(
        <div className="clientTitle"> 
            <h1 className="clientTitleText">Clients always know where to go when they need something</h1>
            <p className="clientSub">One destination that hosts all of your links, pdfs, meeting agendas, deliverables, project timelines, proposals, and more.</p>
            <span className="clientSpan">

            </span>
            <p className="clientSub">Embed your favorite software from Figma to Google Slides to Vimeo.</p>
            <img className="clientSocial" src={Social} alt="img-social"/>
        </div>
    )
}

class Transform extends React.Component{

    render(){
        return(
            <section className="Transform">
                <Container>
                    <Row>
                        <Col>
                            <DemoText/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="transform">
                        <Row>
                            <Col lg={4}>
                                <Clients/>
                            </Col>
                            <Col lg ={8}>
                                <div className="transformPic">
                                    <img src={TransformPic} alt="transform-pic"/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        )
    }
}

export default Transform
