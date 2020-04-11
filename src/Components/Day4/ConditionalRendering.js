import React,{Component} from 'react'

export default class ConditionalRendering extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Ranjith',
            developer:'ye'
        }
    }
    render(){
        // if(this.state.developer==='yes'){
        //     return (
        //         <div>Hii {this.state.name}</div>
        //     )
        // }
        // else{
        //     return(
        //         <>No developers are there</>
        //     )
        // }
        return this.state.developer==='yes' ? <div>Hii {this.state.name}</div>
                    : <>No developers are there</>
        
    }
}