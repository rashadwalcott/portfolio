import React from 'react';
import { Cell , Grid, Button, Textfield} from 'react-mdl';
import * as emailjs from 'emailjs-com';

class Contact extends React.Component {
  state={
    name: '',
    email: '',
    message:' '
  }

  handleChange = (event)=> {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event)=> {
    event.preventDefault()
    const {name, email ,message} = this.state
    emailjs.send(
      'gmail',
      'contact_form',
      {'from_name': name,'to_name': 'Rashad','from_email':email,'message_html':message},
      'user_7t9HDHKcJotRFmlPLT3jW'
    )
    this.resetForm()

    this.props.history.push('/sent');
    }

  resetForm(){
    this.setState({
         name: '',
         email: '',
         message: ''
       })
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
                type='text'
                required={true}
                value={this.state.name}
                style={{width: '300px'}}
                className='textfield'
                />
              <br/>
                <Textfield
                  onChange={(event)=> {this.handleChange(event)}}
                  label='Email'
                  name='email'
                  type='email'
                  required={true}
                  value={this.state.email}
                  style={{width: '300px'}}
                  className='textfield'
                  />
                  <br/>
                    <Textfield
                      onChange={(event)=> {this.handleChange(event)}}
                      label="Message"
                      type='textarea'
                      name='message'
                      required={true}
                      value={this.state.message}
                      style={{width: '300px'}}
                      rows={3}
                      className='textfield'
                      />
                    < br/>
                  <button className='contactbutton' type='submit' onClick={(event)=> {this.handleSubmit(event)}} primary='true'>Submit</button>
            </form>
          </div>

        </Cell>
      </Grid>
    </div>
  );
}
}

export default Contact;
