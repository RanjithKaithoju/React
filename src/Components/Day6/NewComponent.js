import React, { Component } from 'react'

import ReactMemoComponent from './ReactMemoExample'
export class NewComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'React'
        }
    }

    stateChangeSame=()=>{
        this.setState({
            name:'Python'
        },
        ()=>{
            console.log(`state changed with ${this.state.name}`)
        }
        )
    }
 
  
    render(){
       
        return (<div>
            <ReactMemoComponent name={this.state.name}/>
        <button onClick={this.stateChangeSame}>Change the state with same value</button>
       
        </div>)
       
    }
}

export default NewComponent
