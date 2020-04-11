import React ,{Component} from 'react'

class ArrayRendering extends Component{
    constructor(props){
        super(props)
        this.state={
            technology:[
                {name:'React',id:1},
                {name:'ruby',id:2},
                {name:'Python',id:3},
                {name:'java',id:4}
            ]
        }
    }
    render(){
        return(
            <div>
                <h2>Technologies which I know</h2>
                <ul>
                    {
                        this.state.technology.map((tech_name)=>{
                        return <li key={tech_name.id}>{tech_name.name}</li>
                        }
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default ArrayRendering;