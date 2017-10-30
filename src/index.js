
import React from 'react';
import {render} from 'react-dom';
import Header from './components/header/header.js';

import './styles/styles.css';

class App extends React.Component {
  render () {
    return (
        <div>
            <Header/>
        </div>
    );
  }
}

render(<App/>, document.getElementById('root'));