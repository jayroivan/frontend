import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
  <h1>Hola Putos</h1>
  <App />
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
