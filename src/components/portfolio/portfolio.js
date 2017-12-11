
import React, {Component} from 'react';
import './portfolio.css';
import Carousel from '../carousel/carousel.js';
import projects from 'json-loader!../../projects.json';


class Portfolio extends Component {



  render() {
    return (
      <section className="portfolio">
        <h2 className="title"><span className="icon fa fa-code"></span> Portfolio</h2>

        <div className="project">
          <Carousel className="project__carousel" imgs={projects[0].imgs} />
          <h3 className="project__title">{projects[0].name}</h3>
          <h3 className="project__sub-title">{projects[0].type}</h3>
          {/* <ul className="project__details"></ul> */}



        </div>



      </section>
    );
  }
}

export default Portfolio;