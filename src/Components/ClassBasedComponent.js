import React,{Component,Fragment} from 'react'
import FunctionalComponent from './FunctionalComponent'
import FunctionalES6Component from './FunctionalES6Component'
import ClassChild from './ClassChild'
class ClassBasedComponent extends Component{
    state ={
        data : [
            {name:'I am a functional component',marks:70},
            {name:'I am a Functional es6 component',marks:80},
            {name:'Hello Class child',marks:79}
        ]
    }
    render(){
        return(
            <Fragment>
            <div>Hello I am Class Based Component</div>
            <FunctionalComponent marks={this.state.data[0].marks}>{this.state.data[0].name}</FunctionalComponent>
            <FunctionalES6Component marks={this.state.data[1].marks}>{this.state.data[1].name}</FunctionalES6Component>
            <ClassChild marks={this.state.data[2].marks}>{this.state.data[2].name}</ClassChild>
            </Fragment>
            
        )
    }
}

export default ClassBasedComponent;