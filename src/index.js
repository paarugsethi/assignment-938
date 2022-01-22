import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AuthContextProvider from "./Context/AuthContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>,
  rootElement
);
