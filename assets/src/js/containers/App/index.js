import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import routes from './routes';
import { Home } from "./../../components/HomePage/Home";
import { EventPage } from "./../../components/EventPage/EventPage";
import Account from './../../components/AccountPage/Account';
import Search from './../../components/SearchPage/Search';

export class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/event" component={EventPage} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </main>
    )
  }
}

export default App
