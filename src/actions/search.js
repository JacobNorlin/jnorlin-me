import {CALL_API} from '../api/api.js'

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'
export const SEARCH_REQUEST = 'SEARCH_REQUEST'


export function search(query){
    console.log("searching")
    return {
        [CALL_API]: {
            data: query,
            types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
            method: 'GET',
            endpoint: 'search'
        }
    }
}