"use strict"
import {connect} from 'react-redux'
import {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav, Button} from 'react-bootstrap'
import LoginButton from './LoginButton.jsx'
import PostCalendar from './PostCalendar.jsx'
import {fetchPosts, updateBlogPreviewContent, removeBlogPost} from '../actions/blog.js'
import {search} from '../actions/search'
import BlogPost from './BlogPost.jsx'

class Blog extends Component {

    componentWillMount() {
        const {dispatch, user} = this.props
        dispatch(search({username:user.username, id: user.id}))
    }

    render() {
        let {isAuthenticated, searchResult, dispatch} = this.props
        searchResult = JSON.parse(searchResult)
        return <Grid>
            <PageHeader className="subHeader">
                Blog
            </PageHeader>
            <Row>
                <Col sm={3}>
                    <div className="input-group">
                        <input ref="search" type="text"  className="form-control"
                               placeholder="Search..."
                               onChange={(event) => this.handleOnChange(event)}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    {searchResult.map(post => {
                        return (<BlogPost post={post} isAuthenticated={isAuthenticated}
                                          onEditClick={() => {dispatch(updateBlogPreviewContent(post))}}
                                          onRemoveClick={() => dispatch(removeBlogPost(post))}/>)
                    })}
                </Col>
                <Col sm={3} smOffset={6}>
                    <PostCalendar /*posts={}*//>
                    {
                        isAuthenticated &&
                        <a href="#/blog/new">New Post</a>
                    }
                </Col>
            </Row>
        </Grid>
    }

    parseQuery(queryString){
        const terms = queryString.split(" ")
        const tags = terms.filter(term => {
            return term.indexOf("#") > -1
        })
        const text  = terms.filter(term => {
            return term.indexOf("#") < 0
        })
        return {tags, text}
    }

    handleOnChange(event){
        const {dispatch, user} = this.props
        const queryString = this.refs.search.value.trim()
        let queryObj = parseQuery(queryString)
        queryObj = Object.assign({}, queryObj, {
            user
        })
        dispatch(searchBlog(queryObj))
    }

}

Blog.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    searchResult: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}

function mapStateToProps(state) {
    const {search, auth} = state
    const {isAuthenticated, user} = auth
    const {searchResult} = search

    return {
        isAuthenticated,
        user,
        searchResult
    }
}

export default connect(mapStateToProps)(Blog)