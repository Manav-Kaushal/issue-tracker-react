import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/tailwind.css";
import App from "./App";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router>
    <Layout>
      <Toaster />
      <App />
    </Layout>
  </Router>
);
