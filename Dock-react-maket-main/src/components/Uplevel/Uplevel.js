import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Uplevel.css'
import Pic from '../../images/understand.png'


const UplevelText = ()=>{
    return(
        <div className="textUplevel">
            <h3 className = "textTitleUp">Understand what content performs</h3>
            <p className="textSubUp">Get insight into when clients view the shared space and what they clicked on.</p>
        </div>
    )
}


class Uplevel extends React.Component{

    render(){
        return(
            <section className="uplevel">
                <Container>
                    <Row>
                        <Col>
                            <div className="uplevelTop">
                                <h2 className="uplevelTitle">Uplevel how Sales and Customer teams work</h2>
                                <p className="uplevelSub">Dock helps leadership build a repeatable sales and customer success process.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="uplevelContent">
                        <Row>
                            <Col lg={4} className="d-flex align-items-center">
                            <UplevelText/>
                            </Col>                        
                            <Col lg={8}>
                                <div className="uplevelPic">
                                    <img src={Pic} alt="uplevel-pic"/>
                                </div>
                            </Col>                        
                        </Row>
                    </div>
                </Container>

            </section>
        )
    }


}

export default Uplevel