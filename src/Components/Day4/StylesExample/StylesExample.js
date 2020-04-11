import React, { Component } from 'react'
import './myStyles.css'
export default class StylesExample extends Component {
    
    render() {
        const styles={
            fontSize:'30px',
            paddingLeft:'10px'
        }
        return (
            <div>
                <h2 style={{backgroundColor:'blue'}}>Inline</h2>
                
                <h2 style={styles}>Inline declared as an object</h2>
                <h3>External</h3>
                <div className="divt">
                    Hello I am a div
                </div>
            </div>
        )
    }
}
