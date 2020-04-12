import React,{Component} from 'react'
import LifeCucleHooksChild from './LifeCucleHooksChild'
class LifeCycleComponents extends Component{
    constructor(props){
        super(props)
        this.state ={
            name:'React'
        }
        console.log('constructor')
    }

    componentWillMount(){
       console.log("Component Will Mount") 
    }

    shouldComponentUpdate(newProp,newState){
        return true
    }
    clickMe = () =>{
        this.setState({
            name:'Python'
        })
    }
    render(){
        console.log('render')
        return (
        <div>Hello {this.state.name}
        <button onClick={this.clickMe}>Click to change the state</button>
        <LifeCucleHooksChild/>
        </div>
        )
    }
    componentDidMount(){
        console.log('Component Did Mount')
    }
}
export default LifeCycleComponents;