import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NewProductContext from "./context/NewProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NewProductContext>
      <App />
    </NewProductContext>
  </BrowserRouter>
);
