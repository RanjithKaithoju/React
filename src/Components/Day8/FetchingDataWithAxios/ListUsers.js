import React, { Component } from 'react'
import axios from 'axios'
export class ListUsers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users : [],
             error:''
        }
    }
    
    render() {
        return (
            <div>
                {
                    this.state.users.map(user => { return <div key={user.id}><li > {user.id} {user.first_name}</li><img src={user.avatar}/><hr/></div>})
                }
            </div>
        )
    }
    componentDidMount(){
        axios.get(`https://reqres.in/api/users?page=2`)
        .then((response) => this.setState({users:response.data.data}))
        .catch(error => console.log(error))
    }
}

export default ListUsers
