import React from 'react';
import { Grid, Cell} from 'react-mdl';
import mypic from '../picofme.jpeg'
class LandingPage extends React.Component {
  render (){

  return (

    <div style ={{width:'100', margin: 'auto'}}>
      <Grid className ='landing-grid'>
        <Cell col={12}>
          <img src ={mypic}
            alt='avatar'
            className='avatar-img' />
            </Cell>

          <div className='banner-text'>
            <h1> Full Stack Web Developer</h1>

          <hr/>

        <p>Javascript | React | Ruby | Rails | SQL | PostgreSQL | HTML | CSS | SASS</p>

        <div className='social-links'>

          {/* LinkedIn*/}
          <a href='https://www.linkedin.com/in/rashadwalcott/' rel='noopener noreferrer' target="_blank">
            <i className="fab fa-linkedin" aria-hidden='true'/>
          </a>

          {/* Github*/}
          <a href='https://github.com/rashadwalcott' rel='noopener noreferrer' target="_blank">
            <i className="fab fa-github" aria-hidden='true'/>
          </a>

          {/* Medium*/}
          <a href='https://medium.com/rashads-tech-blogs' rel='noopener noreferrer' target="_blank">
            <i className="fab fa-medium-m" aria-hidden='true'/>
          </a>

        </div>
          </div>
      </Grid>

    </div>
  );
}
}

export default LandingPage;
