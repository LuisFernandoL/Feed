import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Components/Provider/User/UserContext";
import { NewProvider } from "./Components/Provider/PostContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NewProvider>
          <App />
        </NewProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
