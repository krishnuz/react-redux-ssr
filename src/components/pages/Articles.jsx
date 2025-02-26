import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../actions/articles";

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);
  const { data } = articles;
  useEffect(() => {
    if (!data) {
      dispatch(fetchArticles());
    }
  });
  return (
    <>
      <h1>Articles</h1>
      {data &&
        data.map(article => (
          <p key={article.title}>
            {article.title} by {article.author}
          </p>
        ))}
    </>
  );
};

export default Articles;
