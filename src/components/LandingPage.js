import React from 'react';
import { Grid, Cell} from 'react-mdl';
import mypic from './picofme.jpeg'
class LandingPage extends React.Component {
  render (){

  return (
    <div style ={{width:'100', margin: 'auto'}}>
      <Grid className ='landing-grid'>
        <Cell col={12}>
          <img src ={mypic}
            alt='avatar'
            className='avatar-img' />
          <div className='banner-text'>
            <h1> Full Stack Web Developer</h1>

          <hr/>

        <p>Javascript | React | Ruby | Rails | SQL | PostgreSQL | HTML | CSS | SASS</p>
        <div className='social-links'>
          <a href='https://www.linkedin.com/in/rashadwalcott/' rel='noopener noreferrer' target="_blank">
            <i className="fa fa-linkedin-square" aria_hidden='true'/>
          </a>
        </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}
}

export default LandingPage;
