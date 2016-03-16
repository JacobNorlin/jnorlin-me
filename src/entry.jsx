import React from 'react';
import ReactDOM from 'react-dom';
import App from './main.jsx';
import {Router, Route, hashHistory, Redirect} from 'react-router';
import Personal from './components/Personal.jsx';
import Repo from './components/Repo.jsx';
import NumberDistribution from './components/NumberDistribution.jsx';

import {videos, projects, experience, texts} from './data/testData.js';

require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');

//images
// require('img!./images/startdust.png')

//css
require('./css/main2.css')

let elem = document.getElementById("app");

let router = <Router history={hashHistory}>
				<Redirect from="/" to="personal" />

				<Route path="/" component={App}>
					<Route path="personal" projects = {projects} experience={experience} interest={[]} component={Personal}/>
					<Route path="repo" videos={videos} texts={texts} component={Repo} />
					<Route path="primes" component={NumberDistribution} />
				</Route>

			</Router>

ReactDOM.render(router, elem);