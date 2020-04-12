import React, { PureComponent } from 'react'

export class ReactPureComponent extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            name:'React'
        }
    }

    stateChangeSame=()=>{
        this.setState({
            name:'React'
        },
        ()=>{
            console.log(`state changed with ${this.state.name}`)
        }
        )
    }
    stateChangeDiff=()=>{
        this.setState({
            name:'Python'
        },
        ()=>{
            console.log(`state changed with ${this.state.name}`)
        }
        )
    }
  
    render(){
        console.log('render')
        return (<div>{this.state.name}
        <button onClick={this.stateChangeSame}>Change the state with same value</button>
        <button onClick={this.stateChangeDiff}>Change the state wit diff value</button>
        </div>)
       
    }
}

export default ReactPureComponent
