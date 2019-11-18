import React from 'react';
import {Link} from 'react-router-dom';

class Projects extends React.Component {
  render (){

  return (
    <div className = "project">
    <h1> Projects</h1>
    <Link to ="">
    <div className="project-image">
    <img src ="" alt="Project Image" />
    </div>
    <div className="project-title">""</div>
    <div className="project-category">""</div>
    </Link>
    </div>
  );
}
}

export default Projects;
