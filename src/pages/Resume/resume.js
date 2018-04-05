import React from 'react';

import Header from '../../components/header/header.js';
import Workexp from '../../components/workexp/workexp.js';
import Portfolio from '../../components/portfolio/portfolio.js';
import Education from '../../components/education/education.js';

export default () => (
    <div>
        <Header />
        <Workexp />
        <Portfolio />
        <Education />
    </div>
);