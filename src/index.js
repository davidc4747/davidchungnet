
import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import './styles/styles.css';
import Home from './pages/Home/home.js';
import Resume from './pages/Resume/resume.js';

import InProgress from './pages/InProgress/inprogress.js';




class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/home" component={Resume} /> */}
                    <Route path="/resume" component={Resume} />
                    <Route path="/projects" component={InProgress} />
                    <Route path="/journal" component={InProgress} />
                    <Route path="/faq" component={InProgress} />
                </div>
            </Router>
        );
    }
}

render(<App />, document.getElementById('root'));