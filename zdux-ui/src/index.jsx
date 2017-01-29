
import React from 'react';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import { render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from './components/App.jsx';
import ZpoolListContainer from './containers/ZpoolListContainer';
import ServerListContainer from './containers/ServerListContainer';

import reducers from './reducers';

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={ZpoolListContainer}></IndexRoute>
        <Route path='/zpools' component={ZpoolListContainer}></Route>
        <Route path='/servers' component={ServerListContainer}></Route>
      </Route>
    </Router>
  </Provider>, document.getElementById('root'))
