import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Projects from './Projects.js';
import Home from './LandingPage.js';
import About from './About.js';
import Contact from './Contact.js';
import Resume from './Resume.js';
import Sent from './Sent.js';

class Main extends React.Component {
  render (){

  return (
    <div>
    <Switch>

      {/*Setting up the router*/}
      <Route exact path ="/" component ={Home} />
      <Route  path ="/projects" component ={Projects} />
      <Route  path ="/about" component ={About} />
      <Route  path ="/contact" component ={Contact} />
      <Route  path ="/resume" component ={Resume} />
      <Route path='/sent' component={Sent} />
      </Switch>
    </div>

  );
}
}

export default Main;
