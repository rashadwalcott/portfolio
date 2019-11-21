import React from 'react';
import { Cell , Grid } from 'react-mdl'
import aboutmepic from '../aboutmepic.jpeg'

class About extends React.Component {
  render (){

  return (
    <div className='about-body'>
      <Grid className='about-grid'>
        <Cell col={6}>
          <h2>Rashad Walcott</h2>
          <img
            src={aboutmepic}
            alt='avatar'
            style={{height: '325px', fontFamily: 'American Typewriter',borderRadius: '25px'}} />

          <p> Full Stack Developer with expertise in JavaScript, React and Ruby on Rails.
            I discovered my love for computer programming ever since I took my first Java class in high school.
            My path lead me to join the Marine Corps but after completing my contract, I just had to finish what I started.
            I pushed forward and earned a Bachelor's degree in Computer Science.
            Combined with my military experience, I bring strong skills in problem solving
            by using inventive ideas in the support of team collaboration and productivity.</p>
        </Cell>
      </Grid>
    </div>
  );
}
}

export default About;
