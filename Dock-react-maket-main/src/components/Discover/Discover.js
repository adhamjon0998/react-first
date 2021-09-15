import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Discover.css'
import Icon1 from '../../icons/discover.svg'
import Icon2 from '../../icons/build-circle.svg'


const DiscoverText =()=>{
    return(
        <div className="discoverText">
                <h3 className="discoverTitle">Discover how Sales and Customer teams use Dock everyday</h3>
                <p className="discoverSub">Dock helps companies across the customer lifecycle.</p>
        </div>
    )
}

const DiscoverBox1 = ()=>{
    return(
     <div className ="discoverBox">
        <div className="boxIcon">
            <img src={Icon1} alt="box-icon"/>
        </div>
        <span>Sales</span>
        <h3>Transform the sales experience</h3>
            <p>Dock makes it easy for prospects to buy and helps sales teams build a repeatable process.</p>
            <a href="/">Learn more →</a>
     </div>   
    )
}
const DiscoverBox2 = ()=>{
    return(
        <div className ="discoverBox">
        <div className="boxIcon">
            <img src={Icon2} alt="box-icon"/>
        </div>
        <span>Customer Success</span>
        <h3>Build strong relationships with customers</h3>
        <p>Dock helps companies onboard customers and manage ongoing relationships.</p>
        <a href="/">Learn more →</a>
        </div> 
    )
}

class Discover extends React.Component{

    render(){
        return(
            <section className="discover">
                <Container>
                    <div className="discoverContent">
                        <Row>
                            <Col lg={4}> 
                                <DiscoverText/>
                            </Col>
                            <Col lg={8} className="d-flex justify-content-between">
                            <DiscoverBox1/>
                            <DiscoverBox2/>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        )
    }
}
export default Discover