import React from 'react'
import FirstComponent from './FirstComponent'

import {Provider} from './ContextManager'
export default function ContextExample() {
  
    
       const data = {
             language:'React',
             Parent:'Javascript'
        }
 
    
    return (
        <div>
            <Provider value={data}>
                <FirstComponent/>
            </Provider>
        </div>
    )
}
