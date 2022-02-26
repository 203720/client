import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Axios para back
import axios from 'axios';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
