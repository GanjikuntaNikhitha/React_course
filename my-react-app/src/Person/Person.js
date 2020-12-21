import React from 'react';
// we dont need component here becz creating function
// we used to import for converting jsx 
const person = (props) => {
    //props nothing but communication between two comonents
    return (
        <div>

            <p>I'm {props.name} and I am working as {props.role}</p>
            <p>{props.children}</p>
        </div>
        )
    
}
export default person;