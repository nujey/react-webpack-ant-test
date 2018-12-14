import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './untils/history'

import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
  ReactDOM.render(
    // <Provider>
    <Router history={history}>
      <Component />
    </Router>
    // </Provider>
    , document.getElementById('root'))
}
render(App)
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
