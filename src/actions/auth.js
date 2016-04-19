"use strict"

import cfg from '../config/apicfg.js'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin(creds){
	return {
		type: LOGIN_REQUEST,
		isFetching: true,
		isAuthenticated: false,
		creds
	}
}

function receiveLogin(user){
	return {
		type: LOGIN_SUCCESS,
		isFetching: false,
		isAuthenticated: true,
		user: user
	}
}

function loginError(message) {
	return {
		type: LOGIN_FAILURE,
		isFetching: false,
		isAuthenticated: false,
		message
	}
}

export function loginUser(creds) {

	let config = {
		method: 'POST',
		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		body: `username=${creds.username}&password=${creds.password}`
	}

	return dispatch => {
		dispatch(requestLogin(creds))

		return  fetch(cfg.BASE_URL+"sessions/create", config)
			.then(res => {
				res.json().then(user => {
					if(!res.ok){
						dispatch(loginError(user.message))
						return Promise.reject(user)
					}else{
						localStorage.setItem('user', JSON.stringify(user))
						dispatch(receiveLogin(user))
					}
				})
			})
	}
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('user')
    dispatch(receiveLogout())
  } 
}