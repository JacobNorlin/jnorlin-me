"use strict"

import {CALL_API} from '../api/api.js'

export const BLOG_FETCH_REQUEST = 'BLOG_FETCH_REQUEST'
export const BLOG_FETCH_SUCCESS = 'BLOG_FETCH_SUCCESS'
export const BLOG_FETCH_FAILURE = 'BLOG_FETCH_FAILURE'

export function fetchPosts(user) {
	return {
		[CALL_API]: {
			endpoint: 'blog/'+user.username,
			types: [BLOG_FETCH_REQUEST,  BLOG_FETCH_SUCCESS, BLOG_FETCH_FAILURE],
            type: 'GET'
		}
	}
}

export const BLOG_POST_REQUEST = 'BLOG_POST_REQUEST'
export const BLOG_POST_SUCCESS = 'BLOG_POST_SUCCESS'
export const BLOG_POST_FAILURE = 'BLOG_POST_FAILURE'
export const BLOG_POST_UPDATE = 'BLOG_POST_UPDATE'
export const BLOG_POST_REMOVE = 'BLOG_POST_REMOVE'

export function addBlogPost(post){
    return {
        [CALL_API]: {
            endpoint: 'blog/protected/addPost',
            authenticated: true,
            types: [BLOG_POST_REQUEST, BLOG_POST_SUCCESS, BLOG_POST_FAILURE],
            method: 'POST',
            post: post

        },
    }
}

export function updateBlogPreviewContent(post){
    return {
        post: post,
        type: BLOG_POST_UPDATE
    }
}

export function removeBlogPost(post){
    return {
        [CALL_API]: {
            endpoint: 'blog/protected/removePost',
            authenticated: true,
            types: [BLOG_POST_REQUEST, BLOG_POST_REMOVE, BLOG_POST_FAILURE],
            method: 'POST',
            post: post
        }
    }
}