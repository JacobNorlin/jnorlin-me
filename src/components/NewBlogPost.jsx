/**
 * Created by Jacob on 2016-04-19.
 */
import {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, Button, PageHeader} from 'react-bootstrap'
import {addBlogPost, updateBlogPreviewContent} from '../actions/blog.js'
import PostPreview from './PostPreview.jsx'

class NewBlogPost extends Component {


    render() {
        const {isAuthenticated} = this.props

        return isAuthenticated && <Grid>
                <PostPreview/>
            <PageHeader>
                    New Post
            </PageHeader>
            <form className="form-inline" role="form">
                <div className="form-group">
                    <textarea minWidth="100%" className="form-control" ref="blogpost" placeholder="Field 1" onChange={(event) => this.handleOnChange(event)}/>
                </div>
            </form>
            <Button type="submit" onClick={(event) => {this.handleSubmit(event)}}>Submit</Button>
        </Grid>

    }

    handleSubmit(event) {
        const {dispatch} = this.props
        const body = this.refs.blogpost.value.trim()

        dispatch(addBlogPost(body))
    }

    handleOnChange(event) {
        const body = this.refs.blogpost.value.trim()
        const {dispatch} = this.props
        dispatch(updateBlogPreviewContent(body))

    }
}

NewBlogPost.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {auth} = state
    const {isAuthenticated} = auth

    return {
        isAuthenticated
    }
}

export default connect(mapStateToProps)(NewBlogPost)