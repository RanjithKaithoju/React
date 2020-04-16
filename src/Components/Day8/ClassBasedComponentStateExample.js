import React, { Component } from 'react'

export class ClassBasedComponentStateExample extends Component {
    state={
        count:0
    }
    handleClick =()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <h2>Clicked the button {this.state.count}</h2>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default ClassBasedComponentStateExample
