import React from 'react'

import SecondChildComponent from './SecondChildComponent'

class SecondComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>HI this is second Component</h1>
                <SecondChildComponent/>
            </div>
        )
    }
}

export default SecondComponent;