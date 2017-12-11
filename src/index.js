
import React from 'react';
import {render} from 'react-dom';

import './styles/styles.css';
import Header from './components/header/header.js';
import WorkExp from './components/workexp/workexp.js';
import Portfolio from './components/portfolio/portfolio.js';


class App extends React.Component {
  render () {
    return (
        <div>
            <Header />
            <WorkExp />
            <Portfolio />
            {/* <Education/> */}
            {/* <ContactMe/> */}
        </div>
    );
  }
}

render(<App/>, document.getElementById('root'));