import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import AppState from './AppState'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/app';
import About from './components/about/about';
import Home from './components/home/home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const routingStore = new RouterStore();

// this is a demo store
const appState = new AppState();


const stores = {
  routing: routingStore,
  appStore: appState
};

const history = syncHistoryWithStore(browserHistory, routingStore);


ReactDOM.render((
  <Provider {...stores}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
