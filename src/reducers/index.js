"use strict"

import auth from './auth.js'
import {blogApiCall} from './blog.js'
import repoApiCall from './repo.js'
import {combineReducers} from 'redux'
export default combineReducers({auth, blogApiCall, repoApiCall})