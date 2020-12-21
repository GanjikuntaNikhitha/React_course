import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
class App extends Component {
  render() {
    return (
      <div className="App">
            <h1>I am a react App</h1>
            <Person name='naresh' role='automation'></Person>
            <Person name='nikki' role='frontend'></Person>
            <Person name='iphon' role='iphoneDev'></Person>

      </div>
    );
      //the above code javascript code converts into jsx as shown below

      //return React.createElement('div', null, 'h1', 'I am a react App')
      //the above code wont work it will gives output as hiI am a react App

      //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does it works??'));
      //the below code works and gives outout as Does it works?? the above examples are for understanding of jsx




     
  }
}

export default App;
