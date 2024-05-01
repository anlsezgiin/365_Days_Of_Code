import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<StrictMode>
    <App />
  </StrictMode>);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
