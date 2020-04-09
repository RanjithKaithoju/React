import React, { Component } from 'react'

class ClassChild extends Component {
    render() {
        return (
            <div>
                {this.props.children} my marks are: {this.props.marks}
            </div>
        )
    }
}
export default ClassChild;