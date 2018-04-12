import React from 'react';
import './projects.css';

import Navbar from '../../components/navbar/navbar.js';
import projects from 'json-loader!../../../assets/projects.json';


export default () => (
    <section>
        <Navbar />
        <ul className="project-list">
            {projects.map((project, index) => (
                <li className="project-list__item project" key={index}>
                    <h1 className="project__title">{project.name}</h1>

                    {/* Scroll through images */}
                    <ul className="project__img-container">
                        {project.imgs.map((img, index) => (
                            <li className="" key={index}><img className="project__img" src={img} alt=""/></li>
                        ))}
                    </ul>


                    {/* TODO: Format the date to a more user friendly thingy */}
                    <div>{project.dateStart}</div>

                    {/* TODO: Loop through 'Skills' */}
                    {/* TODO: Loop through 'Software' */}

                    <p>{project.description}</p>

                    {/* Loop throught details */}
                    <ul>
                        {project.details.map((desrcip, index) => (
                            <li className="" key={index}>{desrcip}</li>
                        ))}
                    </ul>

                </li>
            ))}

        </ul>
    </section>
);