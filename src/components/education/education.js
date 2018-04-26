
import React from 'react';
import './education.css';

export default ({ schools }) => (
    <section className="edu page-container">
        <h2 className="resume__title">{/* <span className="icon fa fa-book"></span> */} Education</h2>
        <div className="school-list">
            {schools.map(({ node: school }, index) =>
                <div className="school" key={index}>
                    <img className="school__logo" src={`${school.logo}`} alt={`${school.name} logo`} />
                    <h3 className="school__name">{school.name}</h3>
                    <ul className="tag-list">
                        {school.skills.map((skill, index) => <li className="tag" key={index}>{skill}</li>)}
                    </ul>
                </div>
            )}
        </div>
    </section>
);