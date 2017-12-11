
import React, {Component} from 'react';
import './portfolio.css';
import Carousel from '../carousel/carousel.js';
import projects from 'json-loader!../../projects.json';


class Portfolio extends Component {



  render() {
    return (
      <section className="portfolio">
        <h2 className="title"><span className="icon fa fa-code"></span> Portfolio</h2>

        <div className="project-list">
          {projects.map(project =>
            <div className="project">
              <Carousel className="project__carousel" imgs={project.imgs} />
              <h3 className="project__title">{project.name}</h3>
              <h3 className="project__sub-title">{project.type}</h3>
              {/* <ul className="project__details"></ul> */}
            </div>
          )}
        </div>



      </section>
    );
  }
}

export default Portfolio;