import React,{Component} from 'react'
import DescribingStateChildren from './DescribingStateChildren'
class DescribingState extends Component{

    state={
        name: 'Ranjith',
        intro : 'React Intro'
    }

    changeTheName=()=>{
        //asynchronous type
        this.setState({
            name:'Ranjith kumar'
        },
        ()=>{
            console.log(this.state.name)
        }
        
        )
        
    }
    //whenever state is changed render function will be automatically called.
    render(){
        return (<div>
            <h2>{this.state.name}</h2>
            <button onClick={this.changeTheName}>Click to change the name</button>
            <DescribingStateChildren name={this.state.name}></DescribingStateChildren> 
        </div>)
    }

}
export default DescribingState;