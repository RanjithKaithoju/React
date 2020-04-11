import React,{Component} from 'react'
import DestructureChild from './DestructureChild'
import DestructureChild2 from './DestructureChild2'
class DestructureObjects extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Ranjith',
            language:'python'
        }
    }
    render(){
        //destructure objects
        const {name,language} = this.state
        return (
            <div>
                {/* <h2>Hello my name is {this.state.name} and i know {this.state.language}</h2> */}
                {/* <h2>Hello my name is {name} and i know {language}</h2> */}
                {/* <DestructureChild name={name} language={language}>Java</DestructureChild> */}
                <DestructureChild2 data={this.state}/>

            </div>
        )
    }
}
export default DestructureObjects;