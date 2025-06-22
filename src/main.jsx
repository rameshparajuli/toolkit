import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";

import { Provider } from "react-redux";
// import { store } from "./store/index.js";
import { store } from "./store2/index.js";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {console.log(store.getState())}
      <App />
    </Provider>
  </React.StrictMode>
);
 