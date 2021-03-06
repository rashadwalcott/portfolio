import React from "react";
import { Grid } from "react-mdl";
import { Link } from "react-router-dom";
import resume from "../RashadWalcott_Resume.pdf";

class Resume extends React.Component {
  render() {
    return (
      <div style={{ width: "100", margin: "auto" }}>
        <Grid className="resume-grid">
          <div className="resume-text">
            <a href={resume} target="_blank" download>
              <button className="download-button">Download</button>
            </a>
            <h2> Technical Projects </h2>
            <b>Brewster App</b> -{" "}
            <a href="https://github.com/rashadwalcott/brewery-client">
              Github (Client)
            </a>{" "}
            |
            <a href="https://github.com/rashadwalcott/brewery-api">
              {" "}
              Github (API)
            </a>{" "}
            | <a href="https://youtu.be/Y2Xkjh6oOAU"> Demo</a>
            <br />
            Users can locate breweries in New York and save them to their
            profile and view more information about selected breweries
            <br />
            + Connected with the Open Brewery DB API for public information on
            breweries <br />+ Implemented a React based front-end and vanilla
            CSS for styling <br />+ Built a Google Maps API to render
            interactive google-style map <br />
            + Established a Ruby on Rails API backend with endpoints for users
            and breweries <br />
            <br />
            <b>GitJobs</b> -{" "}
            <a href="https://github.com/rashadwalcott/GitJobs-client">
              Github (Client)
            </a>{" "}
            |
            <a href="https://github.com/rashadwalcott/GitJobs_API">
              {" "}
              Github (API)
            </a>{" "}
            | <a href="https://youtu.be/hYzK2no91N8"> Demo</a>
            <br />
            Users can locate jobs postings on Github and save them to their
            profile with links to apply
            <br />
            + Coded a user interface with React and Sass for styling <br />
            + Scraped Github Job API to pull and parse job postings data <br />+
            Developed a Ruby on Rails API backend for job postings and users{" "}
            <br />
            + Employed JSON Web Tokens and localStorage to store encrypted user
            information on client-side <br />
            <br />
            <b>Shad's Recipes</b> -{" "}
            <a href="https://github.com/rashadwalcott/Shad-s-Recipe">Github</a>{" "}
            | <a href="https://youtu.be/96hHs49ZTH8"> Demo</a>
            <br />
            User can view and post recipes, as well as like, and leave comments{" "}
            <br />+ Constructed a single page application with Vanilla
            Javascript <br />+ Utilized forms to provide input for image URL and
            recipe details <br />
            + Operated Ruby on Rails controls the back-end, models and
            controllers of MVC <br />
            + Designed front-end with custom CSS <br />
            <br />
            <h2> Technical Skills </h2>
            <p>
              Javascript, React, Redux, Ruby, Rails, SQL, PostgreSQL, HTML, CSS,
              SASS, Flatiron School Immersive Software Engineering Program
            </p>
            <h2>Employment History</h2>
            <b>Code and Theory</b>, New York City, NY <br />
            Front End Developer Intern, Feb 2020 - May 2020 <br />
            + Designed and coded application in an Agile environment utilizing a
            test driven development approach <br />
            + Worked in close cooperation with project managers and other
            functional team members to form a team effort in development <br />
            + Experience with tools for developing design systems and/or
            stateless React component libraries (ex: Storybook) <br />
            + Utilized pair programming approach to ensure high quality code
            <br />
            <br />
            <b>Cardinal Health</b>, San Diego, CA Pharmacy Courier, 2017 - 2018{" "}
            <br />
            + Packaged radiopharmaceutical medication for shipment, performed
            testing, and loaded/unloaded containers within company and
            healthcare providers within established delivery deadlines <br />
            <br />
            <b>AT&T</b>, San Diego, CA <br />
            Premises Technician, 2012 - 2014 <br />
            + Resolved an average number of 25 daily requests provided by
            ticketing system to assist customers with the functionality of
            products <br />
            + Verified all services were working correctly by completing quality
            assurance evaluation before and after service <br />
            + Maintained accurate records of customers, commute and status
            reports <br />
            <br />
            <b>U.S Marine Corps</b>, Oceanside, CA <br />
            Construction Wireman, 2008 - 2012 <br />
            + Planned and prepared required quality assurance inspections,
            exceeding goals and expectations <br />
            + Provided peer-to-peer coaching, conflict resolution and employment
            development to ensure all representatives met government goals and
            standards <br />
            + Monitored maintenance management programs to ensure effective
            management of equipment and materials <br />
            <br />
            <h2>Education</h2>
            <b>Flatiron Schoool</b> - 2019 <br />
            + Immersive Full Stack Web Development, Ruby on Rails and JavaScript
            program <br />
            <br />
            <b>California College San Diego </b> - San Diego, CA - 2016 <br />
            + Bachelors of Science Degree in Computer Science, 3.75 GPA <br />
            <br />
          </div>
        </Grid>
      </div>
    );
  }
}

export default Resume;
