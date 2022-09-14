import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "./helpers";

import { AboutPageAsync, MainPageAsync } from "./pages";
import "./styles/index.scss";
import { useTheme } from "./theme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames({
        regularClassName: "app",
        additional: [theme],
      })}
    >
      <button onClick={toggleTheme}>TOGGLE</button>

      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;