import React,{Component} from 'react'

class EventsExample extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             password:''
        }
    }
    handleUser = (event) =>{
        this.setState({
            name:event.target.value
        },
        ()=>{
            console.log(this.state.name)
        }
        )
    }
    handlePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    handleSubmit=(event)=>{
        alert(`user name is ${this.state.name} , password is ${this.state.password}`)
        event.preventDefault();
    }
    render(){
        return (
            <div>
                <h2>Login</h2>
                {/* {this.state.name} */}
                <br/>
                <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleUser} value={this.state.name}/>
                <br/>
                <input type="text" onChange={this.handlePassword} value={this.state.password}/>
                <br/>
                <button>Submit</button> 
                 </form>
            </div>
        )
    }
}

export default EventsExample;