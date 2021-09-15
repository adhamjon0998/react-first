import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pic1 from '../../images/uzor1.png'
import Pic2 from '../../images/uzor2.png'
import Pic3 from '../../images/uzor3.png'
import Pic4 from '../../images/uzor4.png'
import Pic5 from '../../images/uzor5.png'
import Pic6 from '../../images/uzor6.png'
import './Explore.css'



const ExploreTop=()=>{
return(
    <Container>
    <Row>
        <Col>
        <div className="exploreTitle">
        <h3>Explore Dock templates</h3>
        <p>Explore templates for sales, customer success, and agencies.</p>
        <p>Customize any template and share with clients.</p>
        <a href="/">Explore templates</a>
        </div>
        </Col>
    </Row>
</Container>
)
}

const ExploreBox = (props)=>{
    return(
        <div className="exploreBox">
            <div className="explorePic"><img src={props.img} alt="explore-pic"/></div>
            <span>{props.span}</span>
            <h4>{props.title}</h4>
        </div>
    )
}

const ExploreContent = ()=>{
    
    return(
        <Container>
            <Row className="justify-content-center flex-column align-items-center">
                <Col lg={8} className="d-flex justify-content-around mb-3">
                <ExploreBox img ={Pic1} span ={'sale'} title = {'demo follow up'}/>
                <ExploreBox img ={Pic2} span ={'sale'} title = {'enterprise sales'}/>
                <ExploreBox img ={Pic3} span ={'agency'} title = {'design proposal'}/>
                </Col>  
                <Col lg={8} className="d-flex  justify-content-around">
                    <ExploreBox img ={Pic4} span ={'agency'} title = {'website proposal'}/>
                    <ExploreBox img ={Pic5} span ={'agency'} title = {'brand design project'}/>
                    <ExploreBox img ={Pic6} span ={'customer success'} title = {'implementation plan'}/>
                </Col>  
            </Row>
        </Container>
    )
}

class Explore extends React.Component{


    render(){
        return(
            <section className="explore">
               <ExploreTop/>
                <ExploreContent/>
            </section>
        )
    }
}

export default Explore 