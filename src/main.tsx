import { AnimatePresence, LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <MotionConfig transition={{ duration: 0.4, delay: 0.4 }}>
          <App />
        </MotionConfig>
      </AnimatePresence>
    </LazyMotion>
  </React.StrictMode>
);
