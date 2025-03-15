import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Prank } from "./components/Prank.tsx";
import { Shipher } from "./components/Shipher.tsx";
import { Greeting } from "./components/Greet/Greeting.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="/prank" element={<Prank />} />
          <Route path="/shipher" element={<Shipher />} />
          <Route path="/greeting" element={<Greeting />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
