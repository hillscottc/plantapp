import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import DevTools from 'mobx-react-devtools'
import PlantStore from './PlantStore'
import App from './components/app'
import About from './components/about/about'
import Home from './components/home/home'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

useStrict(true);

const routing = new RouterStore();
const plantStore = new PlantStore();
const stores = {routing, plantStore};

const history = syncHistoryWithStore(browserHistory, routing);

const isDeveloping = process.env.NODE_ENV !== 'production';

ReactDOM.render((
  <Provider {...stores}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
      { isDeveloping && <DevTools /> }
    </div>
  </Provider>
), document.getElementById('root'));
