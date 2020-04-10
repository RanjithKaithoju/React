import React from 'react'

const ChildClass =(props)=>{
    return (
        <>
    <h2>{props.name}</h2>
    <button onClick={props.fun}>Click me to call Parent Class Function</button>
    </>
    )
}
export default ChildClass;
