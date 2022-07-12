import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { default_data } from "./data/index.js";

const data = default_data();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App data={data} />
    </React.StrictMode>
);
