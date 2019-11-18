import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions,Button,CardMenu,IconButton} from 'react-mdl';
class Projects extends React.Component {

  state = {
    activeTab: 0
  }

  toggleCategories(){

    if(this.state.activeTab === 0){
      return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url() center / cover'}}></CardTitle>

        </Card>
      )
    }
    else if(this.state.activeTab === 1){
      return (
        <div><h1>This is Javascript</h1></div>
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

    <section className='projects-grid'>
      <Grid className='projects-grid'>
        <Cell col={12}>
          <div className='content'> {this.toggleCategories()}</div>
        </Cell>
      </Grid>
    </section>
    </div>
  );
}
}

export default Projects;
