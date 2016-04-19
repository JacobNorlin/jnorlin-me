"use strict"

import {CALL_API} from '../api/api.js'

export const BLOG_REQUEST = 'BLOG_REQUEST'
export const BLOG_SUCCESS = 'BLOG_SUCCESS'
export const BLOG_FAILURE = 'BLOG_FAILURE'

export function fetchPosts(user) {
	return {
		[CALL_API]: {
			endpoint: 'blog/'+user.username,
			types: [BLOG_REQUEST,  BLOG_SUCCESS, BLOG_FAILURE]
		}
	}
}