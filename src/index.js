import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

const element = <h1>Hello, world</h1>;

ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();
