
import React from 'react';
import {render} from 'react-dom';

import './styles/styles.css';
import Header from './components/header/header.js';


class App extends React.Component {
  render () {
    return (
        <div>
            <Header/>
            <Protfolio/>
            <Education/>
            <ContactMe/>
        </div>
    );
  }
}

render(<App/>, document.getElementById('root'));