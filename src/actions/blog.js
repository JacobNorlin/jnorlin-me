"use strict"

import {CALL_API} from '../api/api.js'


export function searchBlog(query) {
    return {
        [CALL_API]: {
            endpoint: 'blog/search',
            data: query,
            types: [BLOG_SEARCH_REQUEST, BLOG_SEARCH_SUCCESS, BLOG_SEARCH_FAILURE],
            method: 'GET'
        }
    }
}

export const BLOG_SEARCH_REQUEST = 'BLOG_SEARCH_REQUEST'
export const BLOG_SEARCH_SUCCESS = 'BLOG_SEARCH_SUCCESS'
export const BLOG_SEARCH_FAILURE = 'BLOG_SEARCH_FAILURE'



export const BLOG_POST_REQUEST = 'BLOG_POST_REQUEST'
export const BLOG_POST_SUCCESS = 'BLOG_POST_SUCCESS'
export const BLOG_POST_FAILURE = 'BLOG_POST_FAILURE'
export const BLOG_POST_UPDATE = 'BLOG_POST_UPDATE'
export const BLOG_POST_REMOVE = 'BLOG_POST_REMOVE'

export function addBlogPost(post) {
    return {
        [CALL_API]: {
            endpoint: 'blog/protected/addPost',
            authenticated: true,
            types: [BLOG_POST_REQUEST, BLOG_POST_SUCCESS, BLOG_POST_FAILURE],
            method: 'POST',
            data: post

        },
    }
}

export function updateBlogPreviewContent(post) {
    return {
        post: post,
        type: BLOG_POST_UPDATE
    }
}

export function removeBlogPost(post) {
    return {
        [CALL_API]: {
            endpoint: 'blog/protected/removePost',
            authenticated: true,
            types: [BLOG_POST_REQUEST, BLOG_POST_REMOVE, BLOG_POST_FAILURE],
            method: 'POST',
            data: post
        }
    }
}