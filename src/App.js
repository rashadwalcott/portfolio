import React from 'react';
import { Link } from 'react-router-dom';
import Main from './components/Main.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render (){

  return (
    <div className="App">

        {/*Setting up the Links*/}
        <div className ="navigation-sub">
        <Link to ="/" className ="links">Home</Link>
        <Link to ="/projects" className ="links">Projects</Link>
        <Link to ="/resume" className ="links">Resume</Link>
        <Link to ="/about" className ="links">About</Link>
        <Link to ="/contact" className ="links">Contact</Link>

        </div>
        <Main />
    </div>
  );
}
}

export default App;
