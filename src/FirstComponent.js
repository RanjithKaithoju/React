import React, { Component } from 'react'

 class FirstComponent extends Component {
    render() {
        return (
            //JSX Version
            <div>
                <h2 className="Nav navbar" >Hi I'am from first component.</h2>
            </div>

            // React.createElement('div',null,
            //                         React.createElement('h2',
            //                         {class:'nav navbar'},'Hi Iam from first component.'))

        )
    }
}
export default FirstComponent;
