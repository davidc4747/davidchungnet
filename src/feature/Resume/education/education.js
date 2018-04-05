
import React, {Component} from 'react';
import './education.css';
import schools from 'json-loader!../../../assets/edu.json';

export default class Education extends Component {
  render () {
    return (
        <section className="edu">
            <h2 className="title"><span className="icon fa fa-book"></span> Education</h2>
            <div className="school-list">
                {schools.map((school, index) =>
                    <div className="school" key={index}>
                        <img className="school__logo" src={school.logo} alt={`${school.name} logo`}/>
                        <h3 className="school__name">{school.name}</h3>
                        <ul className="tag-list">
                            {school.skills.map((skill, index) => <li className="tag" key={index}>{skill}</li>)}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
  }
}