"use strict"

import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS} from '../actions/auth.js'

function auth(state = {
	isFetching: false,
	isAuthenticated: localStorage.getItem('id_token') ? true: false
}, action){
	switch(action.type){
		case LOGIN_REQUEST:
		return Object.assign({}, state, {
			isFetching: true,
			isAuthenticated: false,
		})
		case LOGIN_SUCCESS:
		return Object.assign({}, state, {
			isFetching: false,
			isAuthenticated: true,
			user: action.user,
			errorMessage: ''
		})
		case LOGIN_FAILURE:
		return Object.assign({}, state, {
			isFetching: false,
			isAuthenticated: false,
			errorMessage: action.message
		})
		case LOGOUT_SUCCESS:
		return Object.assign({}, state, {
			isFetching: true,
			isAuthenticated: false
		})
		default:
		return state
	}
}

export default auth