import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./Components/Colors.js";
import "./Components/Spacing.js";
import "./Components/Reset.css";
import "./index.css";
import "./Components/Typography/Typography.css";

ReactDOM.render(
  <BrowserRouter basename="/frappe">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
