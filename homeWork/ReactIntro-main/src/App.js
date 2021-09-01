import { Component } from 'react';
import './App.css';
import NavbarCopm from './Components/navbar/nav';
import Section from './Components/Section/section';


class App extends Component {
  state = {
    sections: [
      { name: 'Ford', year: 1990 },
      { name: 'Lamborgini', year: 1995 },
      { name: 'Chevrolet', year: 1998 },
    ],
    title: 'Hello from state',
    showComponents: false

  }

  changeTitle = () => {
    this.setState({
      title: 'Changed Title',
    })


  }
  changeToggleComponents(show) {
    // console.log('Changed', show);

    this.setState({
      showComponents: !show
    })
  }


  changeTitleFromComponent = (name) => {
    this.setState({
      title: name
    })
  }

  onChangeHandler = (event) => {
    let val = event.target.value
    this.setState({
      title: val
    })
  }

  inputChangeHandler(val,index){
    // console.log(event.target.value);
    const sections = [...this.state.sections]
    sections[index].name = val

    this.setState({
      sections
    })

  }

  deleteHandler(index){
    console.log('delete',index);
    let sections = [...this.state.sections]
    sections.splice(index,1) 
    this.setState({
      sections
    })
    
  }

  render() {

    let sections = null
     if (this.state.showComponents) {
      sections = this.state.sections.map((val, index) => {
        return (
          <Section
            key={index}
            name={val.name}
            year={val.year}
            onChange={this.changeTitleFromComponent.bind(this, val.name)}
            inputChangeHandler={(event)=>{this.inputChangeHandler(event.target.value, index)}}
            onDelete={(event)=>{this.deleteHandler(index)}}
            inputValue={val.name}
          />
        )
      })
    } else {
      sections = null
    }


    return (
      <div className="App">
        <NavbarCopm />
        <h1>{this.state.title}</h1>

        <input type="text" onChange={this.onChangeHandler} />

        <button onClick={this.changeTitle}>Click</button>
        <br />
        <br />
        <button onClick={() => { this.changeToggleComponents(this.state.showComponents) }}>Toggle</button>

        {sections}


      </div>
    )

  }
}


export default App;
