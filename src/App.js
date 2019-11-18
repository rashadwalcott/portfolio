import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/Main.js';
import './App.css';

class App extends React.Component {
  render (){

  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Portfolio" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Portfolio">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>

  );
}
}

export default App;
