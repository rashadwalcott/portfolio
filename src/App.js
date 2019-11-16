import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render (){

  return (
    <BrowserRouter>
    <div className="App">
      <div className ="navigation">
        <img src ={logo} className="logo" alt="Logo Image" />

      <h1> Home Component</h1>
      </div>
    </div>
  </BrowserRouter>
  );
}
}

export default App;
