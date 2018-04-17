import React from 'react';

import './resume.css';
import Navbar from '../../components/navbar/navbar.js';

import Header from '../../components/header/header.js';
import Workexp from '../../components/workexp/workexp.js';
import Portfolio from '../../components/portfolio/portfolio.js';
import Education from '../../components/education/education.js';



export const query = graphql`
query resumeQuery {
    allProjectsJson {
      edges {
        node {
          name
          type
          thumbnail
          imgs
          dateStart
          dateEnd
          skills
          software
          description
          details
        }
      }
    }
    allEduJson {
      edges {
        node {
          logo
          name
          skills
        }
      }
    }
  }
`;


export default ({ data }) => (
    <div className="resume">
        <Navbar />

        <Header />
        <Workexp />
        <Portfolio projects={data.allProjectsJson.edges} />
        <Education schools={data.allEduJson.edges} />

        <div className="resume__btn-holder">
            <a className="btn btn--primary resume__download" href="./David-Chung.pdf" target="_blank">Download</a>
        </div>
    </div>
);