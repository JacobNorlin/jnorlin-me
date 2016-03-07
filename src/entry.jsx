import React from 'react';
import ReactDOM from 'react-dom';
import App from './main.jsx';

require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');

//images
// require('img!./images/startdust.png')

//css
require('css!./css/main.css')

let elem = document.getElementById("app");

ReactDOM.render(<App />, elem);