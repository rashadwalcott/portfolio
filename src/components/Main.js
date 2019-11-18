import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Projects from './Projects.js';
import Home from './LandingPage.js';
import About from './About.js';
import Contact from './Contact.js';
import Resume from './Resume.js';

class Main extends React.Component {
  render (){

  return (
    <div>
    <Switch>

      {/*Setting up the router*/}
      <Route exact path ="/" component ={Home} />
      <Route exact path ="/projects" component ={Projects} />
      <Route exact path ="/about" component ={About} />
      <Route exact path ="/contact" component ={Contact} />
      <Route exact path ="/resume" component ={Resume} />
      </Switch>
    </div>

  );
}
}

export default Main;
