import React from 'react'

class ReactRef extends React.Component{

    constructor(props){
        super(props)

        this.InputBoxRef = React.createRef()

        this.SelectRef = React.createRef()

        this.DivRef = React.createRef()
    }

    handleChangeLanguage=()=>{
        alert(`You changed language to ${this.SelectRef.current.value} `)
    }

    clickHandler=()=>{
        this.DivRef.current.append('Hello')
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.InputBoxRef}/>
                <select onChange={this.handleChangeLanguage} ref={this.SelectRef}>
                    <option>React</option>
                    <option>Python</option>
                </select>
                <div className="DivRefExample" ref={this.DivRef}>

                </div>
                <button onClick={this.clickHandler}>Click me to add something</button>
            </div>
        )
    }
    componentDidMount(){
        this.InputBoxRef.current.focus()
    }
}
export default ReactRef;