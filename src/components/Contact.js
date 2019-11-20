import React from 'react';
import { Cell , Grid, Button, Textfield} from 'react-mdl'

class Contact extends React.Component {
  render (){

  return (
    <div className='contact-body'>
      <Grid className='contact-grid'>
        <Cell col={6}>
          <h2>Contact Me </h2>
          <hr />

        
        </Cell>
      </Grid>
    </div>
  );
}
}

export default Contact;
