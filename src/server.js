import React from "react";
import express from "express";
import cors from "cors";
import { matchRoutes, StaticRouter } from "react-router-dom";
import routes from "./routes";
import configureStore from "./store";
import { renderToString } from "react-dom/server";
import App from "./App";
import { Provider } from "react-redux";
import fs from "fs";

const PORT = 3000;
const app = express();

const articles = [
  { title: "Article 1", author: "Krishna" },
  { title: "Article 2", author: "Prakash" },
  { title: "Article 3", author: "Varun" },
];

app.use(cors());

app.get("/api/articles", (req, res, next) => {
  res.json(articles);
});

app.use(express.static("./build", { index: false }));

app.get("/*", async (req, res, next) => {
  const store = configureStore();
  const matchedRoutes = matchRoutes(routes, req.url);
  const dataFetchingPromises = matchedRoutes
    .map(data => (data.route.loadData ? data.route.loadData(store) : null))
    .filter(Boolean);
  await Promise.all(dataFetchingPromises);
  const preloadedState = store.getState();

  try {
    const appHTML = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );
    fs.readFile("./build/index.html", "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }
      return res.send(
        data
          .replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`)
          .replace(
            "</body>",
            `<script>window.__PRELOADED_STATE__=${JSON.stringify(
              preloadedState
            )}</script></body>`
          )
      );
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("An error occurred");
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
