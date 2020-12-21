import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));
//we are not rendering the app component we are just rendering a normal HTML element.

registerServiceWorker();
