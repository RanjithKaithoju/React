import React from 'react'
import {Consumer} from './ContextManager'
function ThirdComponent() {
    return (
        
        <Consumer>
            {
                (data) =>{
                    return  <div>
                    Welcome {data.language} Child of {data.Parent}
                </div>
                }
            }
       
        </Consumer>
    )
}

export default ThirdComponent
