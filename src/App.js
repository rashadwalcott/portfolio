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
        <Header className='header-top' title="P O R T F O L I O"  scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className='header-top' title="P O R T F O L I O">
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
