import React from 'react'

const DestructureChild2 = (props)=>{
    const {name,language}=props.data
    return(
        <div>
            <h2>{name} , {language}</h2>
        </div>
    )
}
export default DestructureChild2;