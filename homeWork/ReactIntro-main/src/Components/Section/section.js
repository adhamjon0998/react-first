import React from 'react'
import './section'
import './sec.css'
import '../../App'

function Section(props) {
    const random1 = Math.floor(Math.random() * 256)
    const random2 = Math.floor(Math.random() * 256)
    const random3 = Math.floor(Math.random() * 256)
    return (
        <div className="componentBlog" style={{
            background: "rgb(" +
                random1 + ","
                + random2 + ","
                + random3 + ")",
        }}>
            <h3 style={{color: '#fff'}}>Name: {props.name}</h3>
            <p  style={{color: '#fff'}}>Year: <strong>{props.year}</strong></p>
            <div className="asd">
            <input type="text" onChange={props.inputChangeHandler} value={props.inputValue} />
            <button onClick={props.onChange}>Change Title</button>
            </div>
            <br />
            <br />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}

export default Section