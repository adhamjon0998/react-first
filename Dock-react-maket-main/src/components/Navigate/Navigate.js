import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavigatePic from '../../images/table.png'
import './Navigate.css'

const NavigateText= ()=>{
    return(
        <div className="navigateText">
            <h3 className="navigateTitle">Navigate complex deals and onboard customers</h3>
            <p className="navigateSub">Stop using that spreadsheet. Instead, build a collaborative mutual action plan with customers - share status, align due dates, assign tasks, leave comments and upload files.</p>
        </div>
    )
} 


class Navigate extends React.Component{


    render(){
        return(
            <section className="navigate">
                <Container>
                    <div className="navigateContent">
                        <Row>
                            <Col lg={8}>
                                <div className="navigatePic">
                                    <img src={NavigatePic.toString()} alt="navigate-pic"/>
                                </div>
                            </Col>
                            <Col lg={4} className="d-flex align-items-center justify-content-end">
                                <NavigateText/>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        )
    }

}

export default Navigate