"use strict"
import {connect} from 'react-redux'
import {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav, Button} from 'react-bootstrap'
import LoginButton from './LoginButton.jsx'
import PostCalendar from './PostCalendar.jsx'
import {fetchPosts, updateBlogPreviewContent, removeBlogPost} from '../actions/blog.js'
import BlogPost from './BlogPost.jsx'

class Blog extends Component {

    componentWillMount() {
        const {dispatch, user} = this.props
        //Fetch blogposts
        dispatch(fetchPosts({username: "test"}))
    }

    render() {
        let {isAuthenticated, posts, dispatch} = this.props
        posts = JSON.parse(posts)
        return <Grid>
            <Col sm={9}>
                {posts.map(post => {
                    return (<BlogPost post={post} isAuthenticated={isAuthenticated} onEditClick={() => {dispatch(updateBlogPreviewContent(post))}} onRemoveClick={() => dispatch(removeBlogPost(post))}/>)
                })}
            </Col>
            <Col sm={3}>
                <PostCalendar /*posts={}*//>
                {
                    isAuthenticated &&
                    <a href="#/blog/new">New Post</a>
                }
            </Col>

        </Grid>
    }

}

Blog.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    posts: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}

function mapStateToProps(state) {
    const {blogApiCall, auth} = state
    const {isAuthenticated, user} = auth
    const {posts} = blogApiCall

    return {
        isAuthenticated,
        posts,
        user
    }
}

export default connect(mapStateToProps)(Blog)