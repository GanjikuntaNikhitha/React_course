import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Input from './Input/Input.js';
import Output from './Output/Output.js'

class App extends Component {
    state = {
        person: [
            { name: 'nikki', role:'frontend' },
            { name: 'naresh', role:'automation'}
        ]
    }
    switchAcessHandler = () => {
        console.log("clicked...")
        //this.state.person[0].name = 'Nikhita Reddy' we cannot use like this 

        this.setState({
            person: [
                { name: "Nikhita Reddy" },
                { name: "Naresh Reddy"}
                ]
        })
    }
  render() {
    return (
      <div className="App">
            <h1>I am a react App</h1>
            <button onClick={this.switchAcessHandler}>Switch Aceess</button>
            <Person name={this.state.person[0].name} role={this.state.person[0].role}></Person>
            <Person name={this.state.person[1].name} role={this.state.person[1].role}>
                <li>
                    <ol>maths</ol>
                    </li>
                <li>
                <ol>physics</ol>
            </li>
                My hobbie is listening songs</Person>
            <Person name='iphon' role='iphoneDev'></Person>
            <Input></Input>
            <Output userName = 'Chotu'></Output>

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
