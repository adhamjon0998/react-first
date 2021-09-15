import './App.css';
import React from 'react';
import Header from './components/Header'
import Transform from './components/Transform';
import Navigate from './components/Navigate';
import Feedback from './components/Feedback';
import Uplevel from './components/Uplevel';
import SaveTime from './components/SaveTime'
import Discover from './components/Discover'
import Explore from './components/Explore'
import GetStarted from './components/GetStarted'
import Footer  from './components/Footer';


class App extends React.Component {
  render(){
    return (
      <div className="wrapperContent">
        <Header/> 
        <Transform/>
        <Navigate/>
        <Feedback/>
        <Uplevel/>
        <SaveTime/>
        <Discover/>
        <Explore/>
        <GetStarted/>
        <Footer/>
      </div>
    );
  }
 
}

export default App;
