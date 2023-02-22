import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

if(document.getElementsByClassName('app')) {
    ReactDOM.render(<App />, document.getElementsByClassName('app'));
}

