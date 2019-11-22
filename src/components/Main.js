import React, {useContext} from 'react';
import { Switch, Route, __RouterContext} from 'react-router-dom';
import { useTransition, animated} from 'react-spring';
import Projects from './Projects.js';
import Home from './LandingPage.js';
import About from './About.js';
import Contact from './Contact.js';
import Resume from './Resume.js';
import Sent from './Sent.js';

class Main extends React.Component {
  render (){
    const { location} = useContext(__RouterContext);
    const transitions = useTransition(location,location => location.pathname, {
      from: {opacity: 0, transform: "translate(100%,0)"},
      enter:{opacity: 1,transform: "translate(0%,0)"},
      leave: {opacity: 0,transform: "translate(-50%,0)"}
    });

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
