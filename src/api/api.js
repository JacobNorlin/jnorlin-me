"use strict"

import cfg from '../config/apicfg.js'

function callApi(endpoint, authenticated) {

	let token = localStorage.getItem('id_token') || null
	let config = {}

	if(authenticated) {
		if(token){
			config = {
				headers: { 'Authorization': 'Bearer ${token}}'}
			}
		}else{
			throw "No token!"
		}
	}

	return fetch(cfg.BASE_URL + endpoint, config)
		.then(response => {
			response.text().then(text => {
				if(!response.ok){
					return Promise.reject(text)
				}
				return text
			}).catch(err => console.log(err))
		})
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
	const callAPI = action[CALL_API]

	if(typeof callAPI === 'undefined'){
		return next(action)
	}

	let {endpoint, types, authenticated} = callAPI

	const [requestType, successType, errorType] = types

	return callApi(endpoint, authenticated).then(
		response => 
			next({
				response,
				authenticated,
				type: successType
			}),
			error => next({
				error: error.message || "There was an error",
				type: errorType
			})
		)
}