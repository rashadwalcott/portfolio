import React from 'react';
import { Cell , Grid, Button, Textfield} from 'react-mdl'

class Contact extends React.Component {
  state={
    name: '',
    email: '',
    message:' '
  }

  handleChange = (event)=> {
    this.setState({[event.target.name]:event.target.value})
  }
  render (){
  return (
    <div className='contact-body'>
      <Grid className='contact-grid'>
        <Cell col={6}>
          <h2>Contact Me </h2>
          <hr />
          <div>
            <form>
              <Textfield
                onChange={(event)=> {this.handleChange(event)}}
                label='Name'
                name='name'
                required='true'
                style={{width: '200px'}}
                />
              <br/>
                <Textfield
                  onChange={(event)=> {this.handleChange(event)}}
                  label='Email'
                  name='email'
                  required='true'
                  style={{width: '200px'}}
                  />
            </form>
          </div>

        </Cell>
      </Grid>
    </div>
  );
}
}

export default Contact;
