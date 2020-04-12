import React from 'react';
class LifeCUcleHooksChild extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('child constructor')
    }
    
    componentWillMount(){
        console.log('child component will mount')
    }

    render(){
        console.log("child render")
        return(
            <div>Child</div>
        )
    }
    componentDidMount(){
        console.log('child componrent did mount')
    }
}
export default LifeCUcleHooksChild;