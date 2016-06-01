"use strict"

import {BLOG_SEARCH_FAILURE, BLOG_SEARCH_REQUEST, BLOG_SEARCH_SUCCESS, BLOG_POST_REMOVE, BLOG_POST_REQUEST, BLOG_POST_SUCCESS, BLOG_POST_FAILURE, BLOG_POST_UPDATE} from '../actions/blog.js'


export function blogApiCall(state = {
    isSearching: false,
    isPosting: false,
    authenticated: true,
    post: {
        body: " ",
        id: -1,
        title: "",
        tags: ""
    },
    searchResult: "[]",
    searchError: false
}, action) {
    switch (action.type) {
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
                isSearching: true
            })
        }

        case BLOG_SEARCH_SUCCESS:
        {
            return Object.assign({}, state, {
                isSearching: false,
                searchResult: action.response,
            })
        }
        case BLOG_SEARCH_FAILURE:
        {
            return Object.assign({}, state, {
                isSearching: false,
                searchError: true
            })
        }

        default:
            return state
    }
}
