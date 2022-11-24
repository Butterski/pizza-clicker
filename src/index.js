import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import {persistor} from './redux/store';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
);

