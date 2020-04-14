import React from 'react'

const HOC =(BaseComponent)=>{

        return class EnhancedComponent extends React.Component{


                render(){
                    const style ={
                        color:'blue'
                    }
                    return (
                        
                        <BaseComponent color={style.color}/>
                    )
                }
        }
    
}
export default HOC;