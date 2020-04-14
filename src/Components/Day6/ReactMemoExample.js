import React from 'react'

const ReactMemoExample =(props)=>{
    console.log('render')
    return(
        <h2>the name is {props.name}</h2>
    )
}
export default React.memo(ReactMemoExample);