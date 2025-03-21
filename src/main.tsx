import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Prank } from "./components/Prank.tsx";
import { Shipher } from "./components/Shipher.tsx";
import { Greeting } from "./components/Greet/Greeting.tsx";
import { Provider } from "react-redux";
import store from "./store.ts";
import { Result } from "./components/Greet/components/Result.tsx";
import { AnimateGreet } from "./components/Greet/components/AnimateGreet.tsx";
import { Content  } from "./components/Greet/components/Content.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
            <Route path="/prank" element={<Prank />} />
            <Route path="/shipher" element={<Shipher />} />
            <Route path="/greeting" element={<Greeting />}>
              <Route path="result?" element={<Result />} />
              <Route path="content?" element={<AnimateGreet />} />
            </Route>
            <Route path="/page" element={<AnimateGreet />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </StrictMode>
);
