"use strict"
import {connect} from 'react-redux'
import {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav, Button} from 'react-bootstrap'
import LoginButton from './LoginButton.jsx'
import PostCalendar from './PostCalendar.jsx'
import {fetchPosts, updateBlogPreviewContent, removeBlogPost} from '../actions/blog.js'
import {searchBlog} from '../actions/blog'
import BlogPost from './BlogPost.jsx'

class Blog extends Component {

    fetchPosts(){
        const {dispatch, user} = this.props
        const {tags="", postId} = this.props.location.query
        dispatch(searchBlog({username:user.username, id: user.id, tags, postId}))
    }

    componentWillMount() {
        this.fetchPosts()
    }

    componentDidUpdate(){
        this.fetchPosts()
    }

    render() {
        let {isAuthenticated, searchResult, dispatch, isSearching, searchError} = this.props
        searchResult = JSON.parse(searchResult).reverse()
        console.log(searchResult)
        console.log(isSearching)
        return <Grid>
            <Row>
            </Row>
            <PageHeader className="subHeader">
                <a href="#/blog">Blog</a>
            </PageHeader>
            <Row>
                <Col sm={6} md={3}>
                    {
                        isSearching ? "Loading..." :
                        searchResult.map(post => {
                        return (<BlogPost post={post} isAuthenticated={isAuthenticated}
                                          onEditClick={() => {dispatch(updateBlogPreviewContent(post))}}
                                          onRemoveClick={() => dispatch(removeBlogPost(post))}/>)
                    })}
                </Col>
                <Col sm={3} smOffset={6}>
                    <PostCalendar/>
                    {
                        isAuthenticated &&
                        <a href="#/blog/new">New Post</a>
                    }
                </Col>
            </Row>
        </Grid>
    }


}

Blog.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    searchResult: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}

function mapStateToProps(state) {
    const {blogApiCall, auth} = state
    const {isAuthenticated, user} = auth
    const {searchResult, isSearching} = blogApiCall

    return {
        isAuthenticated,
        user,
        searchResult,
        isSearching
    }
}

export default connect(mapStateToProps)(Blog)