import React from 'react';
import { Cell , Grid } from 'react-mdl'
import aboutmepic from '../aboutmepic.jpeg'

class About extends React.Component {
  render (){

  return (
    <div>
      <Grid className='about-grid'>
        <Cell col={6}>
          <h2>Rashad Walcott</h2>
          <img
            src={aboutmepic}
            alt='avatar'
            style={{height: '325px', fontFamily: 'American Typewriter'}} />
          
        </Cell>
      </Grid>
    </div>
  );
}
}

export default About;
