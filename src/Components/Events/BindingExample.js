import React,{Component} from 'react'

class BindingExample extends Component{

    constructor(props){
        super(props)

        this.state ={
            name:'Default'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(user){
    //     alert(`I am clicked by ${user}`)
    // }

    handleClick(){
        this.setState({
            name : 'Ranjith'
        })
    }

    handleArrowClick=()=>{
        this.setState({
            name:'Ranjith kumar'
        })
    }
    render(){
        return (
            <div>
                
                {/* <button onClick={()=> this.handleClick('Ranjith')}>Click me</button> */}
                {this.state.name}
                <br/>
                {/* <button onClick={this.handleClick}>Click Me</button> */}

                {/* By calling that function in an ananomous function */}
                {/* <button onClick={()=> this.handleClick()}>Click Me</button> */}

                
                {/* We can bind this function with function call */}
                {/* <button onClick={this.handleClick.bind(this)}>Click Me</button> */}

                {/* We can bind this function with function call */}
                <button onClick={this.handleClick}>Click Me(function)</button>

                <button onClick={this.handleArrowClick}>Click Me(Arrow Function)</button>

            </div>
        )
    }
}

export default BindingExample;