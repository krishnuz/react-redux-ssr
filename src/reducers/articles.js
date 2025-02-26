import { FETCH_ARTICLES } from "../constants/actions/articles";

const initialState = {
  data: null,
};
const articlesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ARTICLES: {
      return {
        ...state,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default articlesReducer;
