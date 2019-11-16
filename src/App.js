// Dependencies
import React from "react";
import { Provider } from "react-redux";
import { Switch, Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
// Screens
import Home from "./screens/Home";
import Card from "./screens/Card";
import ErrorPage from "./screens/ErrorPage";
// Styles
import "antd/dist/antd.css";
import "./App.css";

const history = createBrowserHistory();

const App = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cards/:id" component={Card} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
