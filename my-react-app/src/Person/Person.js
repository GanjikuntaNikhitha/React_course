import React from 'react';
// we dont need component here becz creating function
// we used to import for converting jsx 
const person = () => {
    return <p>I'm a person! and I am {Math.floor(Math.random() * 30)}</p>
    //Dynamic representation  {Math.floor(Math.random() * 30)}
}
export default person;