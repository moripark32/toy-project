import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './Pages/Components/Nav/Nav';
import Footer from './Pages/Components/Footer/Footer';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Nav />
        <Route exact path="/" component={Main} />
        <Footer />
      </Switch>
    </Router>
  );
};
export default Routes;
