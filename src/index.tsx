import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./containers/tsx/App";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
