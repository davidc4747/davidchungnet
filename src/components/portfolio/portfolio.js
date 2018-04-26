
import React from 'react';
import './portfolio.css';


let displayedProjects = ["CareerClue", "MathChallenge", "Tow Def", "ResponsiveGif", "DarkSky"];

export default ({ projects }) => (
    <section className="portfolio page-container">
        <h2 className="resume__title">{/* <span className="icon fa fa-code"></span> */} Portfolio</h2>

        <ul className="resume__list list-unstyled">
            {projects.filter(({ node: project }) => displayedProjects.indexOf(project.name) > -1).map(({ node: project }, index) =>
                <li className="exp" key={project.name}>

                    <div className="exp__header">
                        <img className="exp__img" src={`${project.thumbnail}`} alt="" />
                        <h3 className="exp__title">
                            <div className="exp__company">{project.name}</div>
                            <div className="exp__position">{project.type}</div>
                            <div className="exp__date">{project.dateStart} – {project.dateEnd}</div>
                        </h3>
                    </div>

                    <ul className="exp__details">
                        <li>
                            <span className="highlight">Skills:</span>
                            <ul className="exp__skill tag-list list-unstyled">
                                {project.skills.map((skill, index) => <li className="tag" key={index}>{skill}</li>)}
                            </ul>
                        </li>
                        <li>
                            <span className="highlight">Software:</span>
                            <ul className="exp__software tag-list list-unstyled">
                                {project.software.map((soft, index) => <li className="tag" key={index}>{soft}</li>)}
                            </ul>
                        </li>
                        {project.description && <li>
                            <span className="highlight">Description: </span>
                            <span>{project.description}</span>
                        </li>}
                        {project.details.map((detail, index) => <li key={index}>{detail}</li>)}
                    </ul>
                </li>
            )}
        </ul>



    </section>
);