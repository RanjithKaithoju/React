import React,{Component} from 'react'

class DemoComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'React'
        }
    }

    stateChange=()=>{
        this.setState({
            name:'Python'
        },
        ()=>{
            console.log('state changed')
        }
        )
    }
    shouldComponentUpdate(newProp,newState){
        if(newState === this.state){
            return false
        }
        else{
            return true
        }
        
    }
    render(){
        
        return (<div>{this.state.name}
        <button onClick={this.stateChange}>Change the state</button>
        </div>)
        console.log('render')
    }
}
export default DemoComponent;