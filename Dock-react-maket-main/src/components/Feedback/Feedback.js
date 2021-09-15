import React from 'react'
import { Container } from 'react-bootstrap'
import './Feedback.css'
import Feed1 from '../../images/personal.png'
import Feed2 from '../../images/personal2.png'

class Feedback extends React.Component{

    render(){
        return(
            <section className="feedback">
           <Container className="d-flex justify-content-between">
                <div className="feedBack">
                    <div className="feedBackContent">
                        <h5 className="feedbakcTitle">Personalization at scale.</h5>
                        <p className="feedbackText">Create branded spaces with custom content.</p>
                        <div className="feedbackPic">
                             <img src={Feed1} alt="feed-pic"/>
                        </div>
                    </div>
                </div>
                <div className="feedBack">
                     <div className="feedBackContent">
                        <h5 className="feedbakcTitle">Share feedback & move projects along.</h5>
                        <p className="feedbackText">Customers comment on what you’re working on and share key resources with file uploads.</p>
                        <div className="feedbackPic">
                             <img src={Feed2} alt="feed-pic"/>
                        </div>
                    </div>
                </div>
           </Container> 
           </section>
        )
    }
}

export default Feedback