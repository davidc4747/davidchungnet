import React from 'react';

import './resume.css';
import Navbar from '../../components/navbar/navbar.js';

import Header from './header/header.js';
import Workexp from './workexp/workexp.js';
import Portfolio from './portfolio/portfolio.js';
import Education from './education/education.js';

export default () => (
    <div className="resume">

        <Navbar />

        <Header />
        <Workexp />
        <Portfolio />
        <Education />

        <div className="resume__btn-holder">
            <a className="btn btn--primary resume__download" href="./assets/David-Chung.pdf" target="_blank">Download</a>
        </div>
    </div>
);