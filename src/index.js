import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Indexw from './components/index.componentw';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
  <App />
  <Indexw />
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
