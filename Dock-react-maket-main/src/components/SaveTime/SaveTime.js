import React from 'react'
import { Container } from 'react-bootstrap'
import './SaveTime.css'
import Pic1 from '../../images/save-time.png'
import Pic2 from '../../images/relation.png'



const SaveBox = ()=>{
    return(
        <div className="saveBox">
                <h5 className="saveTitle">Save Time.</h5> 
                <p className="saveSub">Duplicate work from project to project, so you’re not starting from scratch every time.</p>          
                <div className="savePic">
                    <img src={Pic1} alt="save-pic"/>
                </div>
        </div>
    )
}
const SaveBox2 = ()=>{
    return(
        <div className="saveBox">
            <h5 className="saveTitle">Move the relationship forward.</h5>
            <p className="saveSub">Notifications give visibility into how the project is moving along.</p>          
            <div className="savePic">
                <img src={Pic2} alt="save-pic"/>
            </div>
         </div>
    )
}

class SaveTime extends React.Component{

    render(){
        return(
            <section className='saveTime '>
                <Container className="d-flex justify-content-between">
                    <SaveBox/>
                    <SaveBox2/>
                </Container>

            </section>
        )
    }

}


export default SaveTime