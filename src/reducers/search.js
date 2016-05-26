"use strict"

import {SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS} from '../actions/search.js'


export function search(state = {
    isSearching: false,
    authenticated: true,
    searchError: "",
    searchResult: "[]"
}, action) {
    console.log(action.type)
    console.log(SEARCH_SUCCESS)
    switch (action.type) {
        case SEARCH_REQUEST:
        {
            return Object.assign({}, state, {
                isSearching: true,
            })
        }

        case SEARCH_SUCCESS:
        {
            console.log(action.response)
            return Object.assign({}, state, {
                isSearching: false,
                searchResult: action.response,
            })
        }
        case SEARCH_FAILURE:
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