"use strict"

import {BLOG_SEARCH_FAILURE, BLOG_SEARCH_REQUEST, BLOG_SEARCH_SUCCESS, BLOG_FETCH_REQUEST, BLOG_FETCH_SUCCESS, BLOG_FETCH_FAILURE, BLOG_POST_REMOVE, BLOG_POST_REQUEST, BLOG_POST_SUCCESS, BLOG_POST_FAILURE, BLOG_POST_UPDATE} from '../actions/blog.js'


export function blogApiCall(state = {
    isFetching: false,
    isPosting: false,
    authenticated: true,
    post: {
        body: " ",
        id: -1,
        title: "",
        tags: "[]"
    },
    posts: "[]"
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
        case BLOG_POST_REQUEST:
        {
            return Object.assign({}, state, {
                isPosting: true
            })
        }
        case BLOG_POST_SUCCESS:
        {
            return Object.assign({}, state, {
                isPosting: false
            })
        }
        case BLOG_POST_FAILURE:
        {
            return Object.assign({}, state, {
                isPosting: false
            })
        }
        case BLOG_POST_UPDATE:
        {
            return Object.assign({}, state, {
                isPosting: false,
                post: action.post
            })
        }
        case BLOG_POST_REMOVE:
        {
            return Object.assign({}, state, {
                isPosting: false
            })
        }

        case BLOG_SEARCH_REQUEST:
        {
            return Object.assign({}, state, {
                isSearching: true,
            })
        }

        case BLOG_SEARCH_SUCCESS:
        {
            return Object.assign({}, state, {
                isSearching: false,
                searchResult: action.response,
            })
        }
        case BLOG_FETCH_FAILURE:
        {
            return Object.assign({}, state, {
                isSearching: false,
                searchError: action.response
            })
        }

        default:
            return state
    }
}
