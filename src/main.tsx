import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LazyMotion, domAnimation } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <App />
    </LazyMotion>
  </React.StrictMode>
);
