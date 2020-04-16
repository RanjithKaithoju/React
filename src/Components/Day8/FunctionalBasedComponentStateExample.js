import React,{useState} from 'react'

const FunctionalBasedComponentStateExample = (props) =>{
    const [count,setCount]=useState(0)
   
    return (
        <div>
            <h2>Clicked the button {count}</h2>
            <button onClick={()=> setCount(count+1)}>Click</button>
        </div>
    )
}
export default FunctionalBasedComponentStateExample;