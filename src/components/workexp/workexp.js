
import React, {Component} from 'react';
import './workexp.css';

const WorkExp = () => (
    <section className="workexp">

        <h2 className="title"><i className="fa fa-briefcase" /> Work Experience</h2>
        <div className="exp">

            <div className="exp__header">
                <img className="exp__img" src="./src/imgs/pdhi/logo.jpg" alt=""/>
                <h3 className="exp__title">
                    <div className="exp__company">PDHI</div>
                    <div className="exp__position">Full-Stack Developer</div>
                    <div className="exp__date">June 2016 – September 2017</div>
                </h3>
            </div>

            <ul className="exp__details">
                <li>
                    <span className="highlight">Skills:</span>
                    <ul className="exp__skill tag-list list-unstyled">
                        <li className="tag">HTML5</li>
                        <li className="tag">CSS3</li>
                        <li className="tag">Less</li>
                        <li className="tag">Bootstrap</li>

                        <li className="tag">JavaScript</li>
                        <li className="tag">knockout.js</li>
                        <li className="tag">jQuery</li>
                        <li className="tag">D3.js</li>
                        <li className="tag">Node.js</li>

                        <li className="tag">Restful APIs</li>

                        <li className="tag">SQL</li>
                        <li className="tag">C#</li>
                        <li className="tag">ASP.NET</li>

                        <li className="tag">Agile</li>
                        <li className="tag">Scrum</li>
                    </ul>
                </li>
                <li>
                    <span className="highlight">Software:</span>
                    <ul className="exp__software tag-list list-unstyled">
                        <li className="tag">Git</li>
                        <li className="tag">NPM</li>
                        <li className="tag">JIRA</li>
                        <li className="tag">BitBucket</li>
                        <li className="tag">Confluence</li>
                        <li className="tag">Visual Studio</li>
                        <li className="tag">VS Code</li>
                        <li className="tag">SSMS</li>
                    </ul>
                </li>
                <li>Refactored our JS architecture, allowing the creation of modular knockout components</li>
                <li>Lead the initiative to convert our nested CSS structures into a modular BEM standard</li>
                <li>Helped design and implement the initial stages of our Restful API</li>
                <li>Created interactive charts using Google Maps API and D3.js</li>
                <li>Saved debug time by creating SQL scripts to normalize test data</li>
                <li>Helped reorganized entity framework domain object structure</li>
                <li>Participated in regular agile team workflows</li>
            </ul>
        </div>


    </section>
);

export default WorkExp;