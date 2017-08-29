import React from 'react';
import { browserHistory, IndexRoute } from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';
// import { BrowserRouter, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Board from './Board';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={Board}/>
    </Router>
  )
}

export default App
