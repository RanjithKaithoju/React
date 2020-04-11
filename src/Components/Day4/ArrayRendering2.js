import React ,{Component} from 'react'

class ArrayRendering extends Component{
    constructor(props){
        super(props)
        this.state={
            technology:[
                {name:'React'},
                {name:'ruby'},
                {name:'Python'},
                {name:'java'}
            ]
        }
    }
    render(){
        return(
            <div>
                <h2>Technologies which I know</h2>
                <ul>
                    {
                        this.state.technology.map((tech_name,index)=>{
                        return <li key={index}>{tech_name.name}</li>
                        }
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default ArrayRendering;