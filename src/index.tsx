import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import './style.scss';


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;