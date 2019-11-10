import React from "react";
import { Provider } from "react-redux";
import { Switch, Router, Route } from "react-router-dom";
import Home from "./screens/Home";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
import "./App.css";

const history = createBrowserHistory();

const App = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
