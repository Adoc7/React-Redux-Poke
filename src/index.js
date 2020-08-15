import React from "react";
import ReactDOM from "react-dom";
// Import Redux
import { Provider } from 'react-redux';
import store from './store/store';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
      {/* Mettre en place le provider pour redux */}
      <Provider store={store}>
          <App />
      </Provider>
    </React.StrictMode>,
  rootElement
);
