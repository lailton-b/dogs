import React from 'react';

import Footer from '../../src/Componets/Footer';
import Header from '../../src/Componets/Header';
import { Route, Switch } from 'react-router-dom';

import Feed from '../Pages/Feed';
import Account from '../Pages/Account';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';
import Photo from '../Pages/Photo';

const Routes: React.FC = () => (
  <div style={{height: '100%'}}>
    <Header />

    <Switch>
      <Route path="/" exact component={ Feed } />
      <Route path="/conta/:slug" exact component={ Account }  />
      <Route path="/conta" exact component={ Account } />
      <Route path="/perfil/:slug" exact component={ Profile }  />
      <Route path="/foto/:slug" exact component={ Photo }  />
      <Route path="/:slug" exact component={ Login } />
    </Switch>

    <Footer />
  </div>
)

export default Routes
