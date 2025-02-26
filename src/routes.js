import { fetchArticles } from "./actions/articles";
import Articles from "./components/pages/Articles";
import Home from "./components/pages/Home";

const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/articles",
    element: Articles,
    loadData: store => store.dispatch(fetchArticles()),
  },
];

export default routes;
