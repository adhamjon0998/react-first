import Navbar from '../Navbar'
import {Component} from 'react'
import Main from '../Main'


class Header extends Component {

render(){
    return(
        <section className='header'>
            <Navbar />
            <Main />
        </section>
    )
}

}


export default Header   