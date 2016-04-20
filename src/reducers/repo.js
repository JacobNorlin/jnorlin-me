import {API_REQUEST, API_REQUEST_FAILURE, API_REQUEST_FETCHELEMS_SUCCESS, API_REQUEST_ADDELEM_SUCCESS, API_REQUEST_REMOVEELEM_SUCCESS} from '../actions/repo.js'

export default function repoApiCall(state = {
    isFetching: false,
    isPosting: false,
    authenticated: true,
    elem: {
        body: "",
        link: "",
        type: "",
        id: -1
    },
    elems: "[]"
}, action) {
    switch (action.type) {
        case API_REQUEST:
        {
            return Object.assign({}, state, {
                isFetching: true
            })
        }

        case API_REQUEST_FAILURE:
        {
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.response
            })
        }

        case API_REQUEST_FETCHELEMS_SUCCESS:
        {
            return Object.assign({}, state, {
                isFetching: false,
                elems: action.response
            })
        }

        case API_REQUEST_ADDELEM_SUCCESS:
        {
            return Object.assign({}, state, {
                isFetching: false
            })
        }

        case API_REQUEST_REMOVEELEM_SUCCESS:
        {
            return Object.assign({}, state, {
                isFetching: false
            })
        }
        default:
            return state
    }
}