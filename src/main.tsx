import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutMe from "./routes/AboutMe";
import Projects from "./routes/Projects";
import Home from "./routes/Home";
import { Paths } from "./type";

import Blogs from "./routes/Blogs";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path={Paths.Home} element={<App />}>
        <Route path={Paths.Home} element={<Home />} />
        <Route path={Paths.AboutMe} element={<AboutMe />} />
        <Route path={Paths.Projects} element={<Projects />} />
        <Route path={Paths.Blogs} element={<Blogs />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
