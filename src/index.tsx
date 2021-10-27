import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import { store } from "./store/store";

import App from "./components/App/App";

import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
