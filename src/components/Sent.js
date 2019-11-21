import React from 'react';
import { Grid } from 'react-mdl'
class Sent extends React.Component {
  render (){
    return (
      <div className='sent-body'>
        <Grid className='sent-grid'>
      <p>  Your Message Has Been Sent.<br /><br />
        Thank You For Reaching Out. <br /><br />
      I Will Get Back To You Shortly.<br /><br /></p>
  </Grid>
      </div>
    )
  }
}

export default Sent;
