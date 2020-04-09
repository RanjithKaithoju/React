import React from 'react';

function FunctionalComponent(props){
    return (
    <div>{props.children} my marks are: {props.marks}</div>
    )
}
export default FunctionalComponent;