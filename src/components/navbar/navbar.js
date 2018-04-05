import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'


export default () => (
    <ul className="navbar">
        <Link to=""><li className="navbar__item"><i className="navbar__icon fa fa-home"></i> Home</li></Link>
        <Link to="resume"><li className="navbar__item"><i className="navbar__icon fa fa-briefcase"></i> Resume</li></Link>
        <Link to="projects"><li className="navbar__item"><i className="navbar__icon fa fa-code"></i> Projects</li></Link>
        <Link to="journal"><li className="navbar__item"><i className="navbar__icon fa fa-book"></i> Journal</li></Link>
        <Link to="faq"><li className="navbar__item"><i className="navbar__icon fa fa-compass"></i> FAQ</li></Link>
    </ul>
);