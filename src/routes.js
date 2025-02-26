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
  },
];

export default routes;
