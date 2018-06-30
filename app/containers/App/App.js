import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ListMonths from './../ListMonths/index';
import Month from './../Month/index';
import './style.scss';
import ModalRendimentos from "../ModalRendimentos/Loadable";

const App = () => (
  <div>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={ListMonths} />
      <Route path="/month/:month" component={Month} />
      <Route path="/features" component={FeaturePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <ModalRendimentos />
  </div>
);

export default App;
