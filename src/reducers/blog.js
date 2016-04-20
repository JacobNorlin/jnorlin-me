"use strict"

import {BLOG_FETCH_REQUEST, BLOG_FETCH_SUCCESS, BLOG_FETCH_FAILURE, BLOG_POST_REQUEST, BLOG_POST_SUCCESS, BLOG_POST_FAILURE, BLOG_POST_UPDATE} from '../actions/blog.js'

export function blogPosts(state = {
    isFetching: false,
    posts: "[]",
    authenticated: false
}, action) {
    switch (action.type) {
        case BLOG_FETCH_REQUEST:
        {
            return Object.assign({}, state, {
                isFetching: true
            })
        }
        case BLOG_FETCH_SUCCESS:
        {
            return Object.assign({}, state, {
                isFetching: false,
                posts: action.response,
                authenticated: action.authenticated || false
            })
        }
        case BLOG_FETCH_FAILURE:
        {
            return Object.assign({}, state, {
                isFetching: false
            })
        }
        default:
            return state
    }
}

export function addBlogPost(state = {
    isFetching: false,
    authenticated: true,
    post: {body:" ", id:-1}
}, action) {
    switch (action.type) {
        case BLOG_POST_REQUEST:
        {
            return Object.assign({}, state, {
                isFetching: true
            })
        }
        case BLOG_POST_SUCCESS:
        {
            return Object.assign({}, state, {
                isFetching: false
            })
        }
        case BLOG_POST_FAILURE:
        {
            return Object.assign({}, state, {
                isFetching: false
            })
        }
        case BLOG_POST_UPDATE:
        {
            return Object.assign({}, state, {
                isFetching: false,
                post: action.post
            })
        }
        default:
            return state
    }
}
