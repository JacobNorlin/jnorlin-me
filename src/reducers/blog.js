"use strict"

import {BLOG_REQUEST, BLOG_SUCCESS, BLOG_FAILURE} from '../actions/blog.js'

export default function blogPosts(state = {
		isFetching: false,
		posts: [],
		authenticated: false
	}, action) {
	switch(action.type) {
		case BLOG_REQUEST: {
			return Object.assign({}, state, {
				isFetching: true
			})
		}
		case BLOG_SUCCESS: {
			let posts = JSON.parse(action.response)
			return Object.assign({}, state, {
				isFetching: false,
				posts: posts,
				authenticated: action.authenticated || false
			})
		}
		case BLOG_FAILURE: {
			return Object.assign({}, state, {
				isFetching: false
			})
		}
		default:
			return state
	}
}