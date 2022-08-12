import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./state-practice-1/theme.css";
import "./state-practice-1/styles.css";
import App from "./state-solution-1/App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div className="container">
      <App />
    </div>
  </React.StrictMode>
);
