import React from 'react'

//arrow function
const FunctionalES6Component= (props) => {
    return (
        <div>{props.children} my marks are: {props.marks}</div>
    )
}

export default FunctionalES6Component;