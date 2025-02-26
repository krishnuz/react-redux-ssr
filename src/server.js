import express from "express";
import cors from "cors";

const PORT = 4000;
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

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
