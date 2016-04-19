"use strict"
import {render} from 'react-dom';
import {createStore, applyMiddleware}  from 'redux'
import App from './main.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Personal from './components/Personal.jsx';
import Repo from './components/Repo.jsx';
import Blog from './components/Blog.jsx';
import NewBlogPost from './components/NewBlogPost.jsx'
import thunkMiddleware from 'redux-thunk'
import blogApp from './reducers/index.js'
import {Provider} from 'react-redux'
import api from './api/api.js'

require('bootstrap-webpack')


let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)

let store = createStoreWithMiddleware(blogApp)

let rootElement = document.getElementById("app")

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Personal}/>
				<Route path="repo" component={Repo}/>
				<Route path="blog" component={Blog}/>
				<Route path="blog/new" component={NewBlogPost}/>
			</Route>
		</Router>
	</Provider>,
	rootElement
)
