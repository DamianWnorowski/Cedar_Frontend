import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import setAuthToken from './setAuthToken'

setAuthToken(localStorage.getItem("jwtToken"));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
