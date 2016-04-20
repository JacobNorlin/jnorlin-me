/**
 * Created by Jacob on 2016-04-19.
 */
import {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, Button, PageHeader} from 'react-bootstrap'
import {addBlogPost, updateBlogPreviewContent} from '../actions/blog.js'
import PostPreview from './PostPreview.jsx'
import Textarea from 'react-textarea-autosize'

class NewBlogPost extends Component {


    render() {
        const {isAuthenticated, post} = this.props
        const {body, id} = post
        return isAuthenticated && <Grid>
                <PageHeader>Preview</PageHeader>
                <PostPreview/>
                <PageHeader>
                    New Post
                </PageHeader>
                <form className="form-inline" role="form">
                    <div className="form-group">
                        <textarea tows={100} cols={100} ref="blogpost" onChange={(event) => this.handleOnChange(event)} defaultValue={body}/>
                    </div>
                </form>
                <Button type="submit" href="#/blog" onClick={(event) => {this.handleSubmit(event)}}>Submit</Button>
                <Button type="submit" href="#/blog">Back</Button>
            </Grid>

    }

    componentWillUnmount() {
        const {dispatch} = this.props
        dispatch(updateBlogPreviewContent({body:"", id:-1}))
    }


    handleSubmit(event) {
        const {dispatch, post} = this.props
        const body = this.refs.blogpost.value.trim()
        dispatch(addBlogPost(post))
    }

    handleOnChange(event) {
        const body = this.refs.blogpost.value.trim()
        const {dispatch, post} = this.props
        dispatch(updateBlogPreviewContent({body, id: post.id}))

    }
}

NewBlogPost.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    const {auth, addBlogPost} = state
    const {isAuthenticated} = auth
    const {post} = addBlogPost

    return {
        isAuthenticated,
        post
    }
}

export default connect(mapStateToProps)(NewBlogPost)