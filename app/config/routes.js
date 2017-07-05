import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from 'components/App';
import SplashPage from 'components/SplashPage';

import { getAllPaths, getComponentFromPath } from 'services/routeManager';

export default () => (
  <Router history={hashHistory} key={Math.random()}>
    <Route key={Math.random()} path="/" component={App}>
      <IndexRoute component={SplashPage} />
      {getAllPaths()
        .map(path =>
          <Route
            key={Math.random()}
            path={path}
            component={getComponentFromPath(path)}
          />
        )
      }
    </Route>
  </Router>
);
