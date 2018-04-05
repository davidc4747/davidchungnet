
import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import './styles/styles.css';
import Home from './pages/Home/home.js';
import Resume from './pages/Resume/resume.js';


// import Header from './components/header/header.js';
// import WorkExp from './components/workexp/workexp.js';
// import Portfolio from './components/portfolio/portfolio.js';
// import Education from './components/education/education.js';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/resume" component={Resume} />
                </div>
            </Router>
        );
    }
}

render(<App />, document.getElementById('root'));