import {useStrict} from 'mobx';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import PlantStore from './PlantStore'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/app';
import About from './components/about/about';
import Home from './components/home/home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

useStrict(false);

const routing = new RouterStore();
const plantStore = new PlantStore();

const stores = {routing, plantStore};

const history = syncHistoryWithStore(browserHistory, routing);

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
