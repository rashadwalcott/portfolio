import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions,Button,CardMenu,IconButton} from 'react-mdl';
class Projects extends React.Component {

  state = {
    activeTab: 0
  }

  toggleCategories(){

    if(this.state.activeTab === 0){
      return (
        <div className='projects-grid'>
          {/*First React Project */}
        <Card shadow={5} style={{width: '550px', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://camo.githubusercontent.com/b7468bd447a0e7a54e9eb4713f938f3d2a7f5c25/68747470733a2f2f692e696d6775722e636f6d2f547a52757131752e6a7067) center / cover'}}></CardTitle>
          <CardText>
            <h5>Brewster App</h5>
            An application where a user can sign up for an account.
            Upon signing in a user can see a map of breweries in New York.
            They can save the breweries they would like to visit.
            User can also delete breweries from their list.
          </CardText>
          <CardActions border>
            <Button href = 'https://github.com/rashadwalcott/brewery-client' colored target="_blank">Github FrontEnd</Button>
            <Button href = 'https://github.com/rashadwalcott/brewery-api' colored target="_blank">Github BackEnd</Button>
            <Button href = 'https://youtu.be/Y2Xkjh6oOAU' colored target="_blank">Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
        </Card>
        {/*Second React Project */}
        <Card shadow={5} style={{width: '550px', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://camo.githubusercontent.com/ceda4fd4e948d67e564832f82a65855219675135/68747470733a2f2f692e696d6775722e636f6d2f345664516e63762e6a7067) center / cover'}}></CardTitle>
          <CardText>
            <h5>GitJobs</h5>
            An application where a user can view Software Engineering jobs.
             The user is able to select and see details for that job as well as save the job for later and apply through direct links.
          </CardText>
          <CardActions border>
            <Button href = 'https://github.com/rashadwalcott/GitJobs-client' colored target="_blank">Github FrontEnd</Button>
            <Button href = 'https://github.com/rashadwalcott/GitJobs_API' colored target="_blank">Github BackEnd</Button>
            <Button href = 'https://youtu.be/hYzK2no91N8' colored target="_blank">Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
        </Card>
      </div>
      )
    }
    else if(this.state.activeTab === 1){
      return (
        <Card shadow={5} style={{width: '550px', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://camo.githubusercontent.com/b62d5075f07123140d859e8f1952fdb47065ebf2/68747470733a2f2f692e696d6775722e636f6d2f754b594c6453382e6a7067) center / cover'}}></CardTitle>
          <CardText>
            <h5>Shad's Recipes</h5>
            This project is a Single Page Application that has a list of recipes.
            When a user selects a recipe they can see more detailed information for that recipe as well as Like and Comment on that Recipe.
            A user also has the ability to add recipes to the list.
          </CardText>
          <CardActions border>
            <Button href = 'https://github.com/rashadwalcott/Shad-s-Recipe' colored target="_blank">Github</Button>
            <Button href = 'https://youtu.be/96hHs49ZTH8' colored target="_blank">Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
        </Card>
      )
    }
  }
  render (){
  return (
    <div className = "category-tabs">
    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
      <Tab>React</Tab>
      <Tab>Javascript</Tab>
    </Tabs>

      <Grid>
        <Cell col={12}>
          <div className='content'> {this.toggleCategories()}</div>
        </Cell>
      </Grid>

    </div>
  );
}
}

export default Projects;
