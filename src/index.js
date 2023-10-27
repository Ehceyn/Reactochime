import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "tw-elements";
import HeaderContextProvider from "./state/contexts/HeaderContext";
import DisplaySidebarProvider from "./state/contexts/DisplaySidebarContext";
import AuthProvider from "./state/contexts/AuthContext";

import "swiper/css/bundle";
import AddDeviceProvider from "./state/contexts/AddDeviceContext";
import UserAccountProfileProvider from "./state/contexts/UserAccountProfileContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DisplaySidebarProvider>
        <HeaderContextProvider>
          <AuthProvider>
            <AddDeviceProvider>
              <UserAccountProfileProvider>
                <App />
              </UserAccountProfileProvider>
            </AddDeviceProvider>
          </AuthProvider>
        </HeaderContextProvider>
      </DisplaySidebarProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
