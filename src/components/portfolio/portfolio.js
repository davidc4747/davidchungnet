
import React, { Component } from 'react';
import './portfolio.css';
import Carousel from '../carousel/carousel.js';
import projects from 'json-loader!../../projects.json';


class Portfolio extends Component {



  render() {
    return (
      <section className="portfolio">
        <h2 className="title"><span className="icon fa fa-code"></span> Portfolio</h2>

        <div className="project-list">
          {projects.map((project, index) =>
            <div key={index} className="project">
              <img className="project__img" src={project.thumbnail} />
              <div className="project__overlay">
                <h3 className="project__title">{project.name}</h3>
                <h3 className="project__sub-title">{project.type}</h3>
                <div className="project__actions">
                  {project.github !== "" &&
                    <a className="project__action" href={project.github} target="_blank"><i className="fa fa-github-alt"></i></a>
                  }
                  {/* <a className="project__action" href=""><i className="fa fa-eye"></i></a> */}
                </div>
              </div>
            </div>
          )}
        </div>



      </section>
    );
  }
}

export default Portfolio;