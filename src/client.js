import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/dashboard.css";
import "./styles/mapbox-gl.css";

import App from "./App";

ReactDOM.hydrate(
  <BrowserRouter>
    <App data={window.__INITIAL_DATA__} />
  </BrowserRouter>,
  document.querySelector("#app")
);
