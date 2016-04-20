
import {CALL_API} from '../api/api.js'

export const API_REQUEST_FETCHELEMS_SUCCESS = 'API_REQUEST'
export const API_REQUEST_ADDELEM_SUCCESS = 'API_ADDELEM'
export const API_REQUEST_REMOVEELEM_SUCCESS = 'API_REQUEST_REMOVEELEM'
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE'
export const API_REQUEST = 'API_REQUEST_SUCCESS'

export function fetchElems(user){
    return {
        [CALL_API]: {
            endpoint: 'repo/'+user.username,
            types: [API_REQUEST_FETCHELEMS_SUCCESS, API_REQUEST_FAILURE, API_REQUEST],
            type: 'GET'
        }
    }
}

export function addElem(elem){
    return {
        [CALL_API]: {
            endpoint: 'repo/protected/addElem',
            authenticated: true,
            types: [API_REQUEST_ADDELEM_SUCCESS, API_REQUEST_FAILURE, API_REQUEST],
            method: 'POST',
            data: elem
        }
    }
}

export function removeElem(elem){
    return {
        [CALL_API]: {
            endpoint: 'repo/protected/removePost',
            authenticated: true,
            types: [API_REQUEST_REMOVEELEM_SUCCESS, API_REQUEST_FAILURE, API_REQUEST],
            method: 'POST',
            data: elem
        }
    }
}