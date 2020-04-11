import React from 'react'

const DestructureChild =(props)=>{
    let {name,language,children}=props
   return (
       <div><h2>Hello {name} you know {language} , {children}</h2></div>
   )
}
export default DestructureChild;