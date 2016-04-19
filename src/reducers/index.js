"use strict"

import auth from './auth.js'
import {blogPosts, addBlogPost} from './blog.js'
import {combineReducers} from 'redux'
export default combineReducers({auth, blogPosts, addBlogPost})