import { Routes, Route, Link } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {routes.map(({ path, element: Element }, index) => (
          <Route key={index} path={path} element={<Element />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
