
import {CALL_API} from '../api/api.js'

export const API_REQUEST_FETCHELEMS_SUCCESS = 'API_REQUEST_FETCHELEMS_SUCCESS'
export const API_REQUEST_ADDELEM_SUCCESS = 'API_ADDELEM'
export const API_REQUEST_REMOVEELEM_SUCCESS = 'API_REQUEST_REMOVEELEM'
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE'
export const API_REQUEST = 'API_REQUEST'
export const REPO_POST_ERROR = 'REPO_POST_ERROR'

export function searchRepo(query){
    return {
        [CALL_API]: {
            endpoint: 'repo/search',
            data: query,
            types: [API_REQUEST, API_REQUEST_FETCHELEMS_SUCCESS, API_REQUEST_FAILURE],
            method: 'GET'
        }
    }
}

export function addElem(elem){
    const faults = checkSubmitValidity(elem)
    if(faults.length > 0){
        return {
            postError: faults,
            type: REPO_POST_ERROR
        }
    }else{
        window.location = "#/repo" //this is really dumb...
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
}

function checkSubmitValidity(elem){
    const {link, title, summary, tags} = elem
    console.log(elem)
    let faults = new Array()
    if(link === ""){
        faults.push("link")
    }
    if(title === ""){
        faults.push("title")
    }
    if(summary === ""){
        faults.push("summary")
    }
    return faults
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