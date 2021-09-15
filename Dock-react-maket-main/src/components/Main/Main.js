import React from 'react'
import './Main.css'
import {Col, Container, Row} from 'react-bootstrap'


import Pic from '../../images/header-img.png'


const HeaderTitle= ()=>{
    return(
        <div className='headerTitle'>
          <h1 className="titleMain">The new way to manage external relationships</h1>
          <p className="subtitleMain">Create shared spaces with</p>
          <p className="subtitleMain">prospects and customers</p>
          <a href='/' className="startMain">Get Started</a>
        </div>
    )
}

const HeaderPic = ()=>{
    return(
        <div className="headerPic">
            <div className="imgMain">
                <img src={Pic} alt="header-img"/>
            </div>  
        </div>
    )
}


class Main extends React.Component{
    
    render(){
        return(
           <section className="mainHeader">
               <Container>
                   <Row>
                <Col lg={5}>
                    <HeaderTitle/>
                </Col>
                <Col lg={7}>
                    <HeaderPic/>
                </Col>
                </Row>


               </Container>
           </section>
        )
    }

}



export default Main