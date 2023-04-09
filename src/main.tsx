import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
    </LazyMotion>
  </React.StrictMode>
);
