"use strict"

import cfg from '../config/apicfg.js'

function callApi(endpoint, authenticated, method, data) {

	let user = JSON.parse(localStorage.getItem('user')) || null
	console.log("data")
	console.log(data)
	let config = {}
	if(authenticated) {
		if(user.id_token){
			config = {
				headers: { 'Authorization': `Bearer ${user.id_token}`,
					'Content-Type': 'application/x-www-form-urlencoded'},
				body: `user=${JSON.stringify(user)}&data=${JSON.stringify(data)}`,
				method: method,
				mode: 'cors'
			}
		}else{
			throw "No token!"
		}
	}
	return fetch(cfg.BASE_URL + endpoint, config)
	.then(response => 
		response.text().then(text => ({ text, response }))
		).then(({ text, response }) => {
			if (!response.ok) {
				return Promise.reject(text)
			}

			return text
		}).catch(err => console.log(err))
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
	const callAPI = action[CALL_API]

	if(typeof callAPI === 'undefined'){
		return next(action)
	}

	let {endpoint, types, authenticated, method, data} = callAPI

	const [requestType, successType, errorType] = types

	return callApi(endpoint, authenticated, method, data).then(
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