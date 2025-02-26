import { makeAPICall } from "../utils/api";
import { FETCH_ARTICLES } from "../constants/actions/articles";

export const fetchArticles = () => async dispatch => {
  const data = await makeAPICall("http://localhost:4000/api/articles");

  dispatch({
    type: FETCH_ARTICLES,
    payload: data,
  });
};
