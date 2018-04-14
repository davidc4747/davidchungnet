
import React from 'react';
import './portfolio.css';




export default ({ projects }) => (
    <section className="portfolio">
        <h2 className="title"><span className="icon fa fa-code"></span> Portfolio</h2>

        <div className="portfolio__project-list">
            {projects.map(({ node: project }, index) =>
                <div className="exp" key={project.name}>

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
                            <span className="highlight">Description:</span>
                            <span>{project.description}</span>
                        </li>}
                        {project.details.map((detail, index) => <li key={index}>{detail}</li>)}
                    </ul>
                </div>
            )}
        </div>



    </section>
);