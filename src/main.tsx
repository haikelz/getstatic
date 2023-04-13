import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <MotionConfig transition={{ duration: 0.4, delay: 0.4 }}>
        <App />
      </MotionConfig>
    </LazyMotion>
  </React.StrictMode>
);
