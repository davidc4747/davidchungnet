import React from 'react';


import Navbar from '../../components/navbar/navbar.js';

import Header from './header/header.js';
import Workexp from './workexp/workexp.js';
import Portfolio from './portfolio/portfolio.js';
import Education from './education/education.js';

export default () => (
    <div>
        
        <Navbar />

        <Header />
        <Workexp />
        <Portfolio />
        <Education />
    </div>
);