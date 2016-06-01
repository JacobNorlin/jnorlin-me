import {
    REPO_POST_ERROR,
    REPO_ELEM_PREVIEW_UPDATE,
    API_REQUEST,
    API_REQUEST_FAILURE,
    API_REQUEST_FETCHELEMS_SUCCESS,
    API_REQUEST_ADDELEM_SUCCESS,
    API_REQUEST_REMOVEELEM_SUCCESS} from '../actions/repo.js'

export default function repoApiCall(state = {
    isFetching: false,
    isPosting: false,
    authenticated: true,
    elem: {
        summary: "",
        link: "",
        tags: "",
        title: "",
        id: -1
    },
    searchResult: "[]",
    postError: []
}, action) {
    switch (action.type) {
        case REPO_POST_ERROR:
        {
            return Object.assign({}, state, {
                postError: action.postError,
            })
        }
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
                searchResult: action.response
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
        case REPO_ELEM_PREVIEW_UPDATE:
        {
            return Object.assign({}, state, {
                elem: action.elem
            })
        }
        default:
            return state
    }
}