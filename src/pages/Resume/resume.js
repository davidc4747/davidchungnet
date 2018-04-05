import React from 'react';


import Navbar from '../../components/navbar/navbar.js';

import Header from '../../components/header/header.js';
import Workexp from '../../components/workexp/workexp.js';
import Portfolio from '../../components/portfolio/portfolio.js';
import Education from '../../components/education/education.js';

export default () => (
    <div>
        
        <Navbar />

        <Header />
        <Workexp />
        <Portfolio />
        <Education />
    </div>
);