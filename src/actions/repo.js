
import {CALL_API} from '../api/api.js'

export const API_REQUEST_FETCHELEMS_SUCCESS = 'API_REQUEST_FETCHELEMS_SUCCESS'
export const API_REQUEST_ADDELEM_SUCCESS = 'API_ADDELEM'
export const API_REQUEST_REMOVEELEM_SUCCESS = 'API_REQUEST_REMOVEELEM'
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE'
export const API_REQUEST = 'API_REQUEST'

export function fetchElems(user){
    return {
        [CALL_API]: {
            endpoint: 'repo/'+user.username,
            types: [API_REQUEST, API_REQUEST_FETCHELEMS_SUCCESS, API_REQUEST_FAILURE],
            type: 'GET'
        }
    }
}

export function addElem(elem){
    return {
        [CALL_API]: {
            endpoint: 'repo/protected/addElem',
            authenticated: true,
            types: [API_REQUEST, API_REQUEST_ADDELEM_SUCCESS, API_REQUEST_FAILURE],
            method: 'POST',
            data: elem
        }
    }
}

export function removeElem(elem){
    return {
        [CALL_API]: {
            endpoint: 'repo/protected/removeElem',
            authenticated: true,
            types: [API_REQUEST, API_REQUEST_REMOVEELEM_SUCCESS, API_REQUEST_FAILURE],
            method: 'POST',
            data: elem
        }
    }
}

export const REPO_ELEM_PREVIEW_UPDATE = 'REPO_ELEM_PREVIEW_UPDATE'

export function updateElemPreview(elem){
    return {
        elem: elem,
        type: REPO_ELEM_PREVIEW_UPDATE
    }
}