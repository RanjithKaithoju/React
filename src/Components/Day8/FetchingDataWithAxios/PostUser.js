import React from 'react'
import axios from 'axios'

class  PostUser extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             job:''
        }

    }
    
    handleChange=(event)=>{
       this.setState({
           [event.target.name]: event.target.value
       }) 
    }
    handleSubmit=(event)=>{
        axios.post(`https://reqres.in/api/users`,{"name":this.state.name,"job":this.state.job})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
        event.preventDefault()
    }
    render(){
    return (
        <div>
            <form  onSubmit={this.handleSubmit}>
                <label>Name: <input type="text" name="name" onChange={this.handleChange}/></label><br/>
                <label>Job: <input type="text" name="job" onChange={this.handleChange}/></label><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
}

export default PostUser
