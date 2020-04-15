import React from 'react'
import {Redirect} from 'react-router-dom'

export default function Home(props) {
    if(props.logged){
        return (
            <div style={{backgroundColor:'skyblue'}}>
                <h2>Welocome home {props.name}</h2>
            </div>
        )
    }
    else{
        return ( <Redirect to="/" />)
    }
   
}
