import React from 'react'

import {Link,NavLink} from 'react-router-dom'
export default function Header() {
    return (
        <div style={{backgroundColor:'tan'}}>
            <h1 >Header</h1>
            {/* <Link to="/" exact>Login</Link>
            <Link to="/home" exact>Home</Link> */}

            <NavLink to="/" exact activeStyle={{color:'orange'}}>Login</NavLink>
            <NavLink to="/home" exact activeStyle={{color:'orange'}}>Home</NavLink>
        </div>
    )
}
