import React from 'react';
import ReactDOM from 'react-dom'

// Provider是react-redux两个核心工具之一，作用就是将store传递到项目的每一个组件中
// connect是另外的核心工具，将额外的props传递给组件，
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './untils/history'

import './assets/css/index.css';
import App from './App';
import store from './store/index'

import registerServiceWorker from './registerServiceWorker';

const render = Component => {
  ReactDOM.render(
    <Provider store = {store}>
      <Router history={history}>
        <Component />
      </Router>
    </Provider>
    , document.getElementById('root'))
}
render(App)
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
