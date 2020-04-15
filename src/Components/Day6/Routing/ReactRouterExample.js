import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import User from './User'
// install react-router-dom ( npm install react-router-dom --save)
export class ReactRouterExample extends Component {
    state={
        logged:false,
        name:'ranjith'
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                        <Route path="/" exact component={Login}></Route>
                        {/* <Route path="/home" exact component={() => {return this.state.logged ? <Home name={this.state.name}/> : <Login/>}}></Route> */}
                        <Route path="/home" exact component={()=> {return <Home name={this.state.name} logged={this.state.logged}/> }} />
                        <Route path="/user/:username" exact component={User}/>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}

export default ReactRouterExample
