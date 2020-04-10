import React from 'react'
import ChildClass from './ChildClass'
class ParentClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'I am Parent'
        }
    }

    handleChange=()=>{
        this.setState({
            name:'I am changed  from child component'
        })
    }
    render(){
        return (
            <div>
               
                <ChildClass name={this.state.name} fun={this.handleChange.bind(this)}/>
            </div>
        )
    }
}
export default ParentClass;