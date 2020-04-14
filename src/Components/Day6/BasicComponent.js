import React,{Component} from 'react'
import HOC from './HOC'
class BasicComponent extends Component{

    render(){
        return(
            <div><h2 style={{backgroundColor:this.props.color}}>Hello Desciribing HOC</h2></div>
        )
    }
}
export default HOC(BasicComponent);