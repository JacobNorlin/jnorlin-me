"use strict"

import cfg from '../config/apicfg.js'

function callApi(endpoint, authenticated, method, data) {

    let user = JSON.parse(localStorage.getItem('user')) || null
    let req = createRequest(authenticated, method, user, data, endpoint)
    console.log(req)

    return fetch(req)
        .then(response =>
            response.text().then(text => ({text, response}))
        ).then(({ text, response }) => {
            if (!response.ok) {
                return Promise.reject(text)
            }
            console.log(text)
            return text
        }).catch(err => console.log(err))
}

function serialize( obj ) {
    return '?'+Object.keys(obj).reduce(function(a,k){a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&')
}

function createRequest(authenticated, method, user, data, endpoint){
    let config = createRequestConfig(authenticated, method, user, data)
    switch (method) {
        case 'GET':
        {
            let qs = serialize(data)
            return new Request(cfg.BASE_URL+endpoint + qs, config)
        }
        case 'POST':
        {
            config.body = `user=${JSON.stringify(user)}&data=${JSON.stringify(data)}`
            return new Request(cfg.BASE_URL+endpoint, config)
        }

    }
}

function createRequestConfig(authenticated, method, user, data){
    let config = {method: method,
        mode: 'cors'}
    if (authenticated) {
        if (user.id_token) {
            let headers = {headers: {
                'Authorization': `Bearer ${user.id_token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }}
            Object.assign(config, headers)
        }
        else
            throw "No Token!"
    }
    return config
}


export const CALL_API = Symbol('Call API')

export default store => next => action => {
    const callAPI = action[CALL_API]

    if (typeof callAPI === 'undefined') {
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