// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./registerServiceWorker";
import store from "./store";
// App
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
