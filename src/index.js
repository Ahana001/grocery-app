import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext";
import { AuthContextProvider } from "./context/AuthContext";
import { DisplayContextProvider } from "./context/DisplayContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    <DisplayContextProvider>
      <AuthContextProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </AuthContextProvider>
    </DisplayContextProvider>
  </Router>
  // </React.StrictMode>
);
