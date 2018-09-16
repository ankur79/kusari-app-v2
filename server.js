import "babel-polyfill";
import express from "express";
import cors from "cors";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import bodyParser from "body-parser";
import serialize from "serialize-javascript";
import App from "./src/App";
import controller from "./controllers/controller";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("build"));
controller.controller(app);
app.get("*", (req, res) => {
  axios({
    method: "GET",
    url: "http://localhost:3000/api/users"
  })
    .then(response => {
      const context = {};
      const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <App data={response.data} />
        </StaticRouter>
      );
      const html = `
        <!doctype html>
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <title>Kusari App</title>
            </head>
            <body>
                <div id="app">
                    ${content}
                </div>
                <script src="client_bundle.js"></script>
                <script>window.__INITIAL_DATA__ = ${serialize(
                  response.data
                )}</script>
            </body>
        </html>
    `;
      res.send(html);
    })
    .catch(error => console.warn(error));
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
