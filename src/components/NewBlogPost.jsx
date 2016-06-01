/**
 * Created by Jacob on 2016-04-19.
 */
import {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, Button, PageHeader} from 'react-bootstrap'
import {addBlogPost, updateBlogPreviewContent} from '../actions/blog.js'
import BlogPost from './BlogPost.jsx'
import Textarea from 'react-textarea-autosize'




class NewBlogPost extends Component {


    render() {
        const {isAuthenticated, post, isPosting} = this.props
        const {body, id, tags, title} = post
        const tagString = tags
        return isAuthenticated && <Grid>
                <PageHeader className="subHeader">Preview</PageHeader>
                <BlogPost isAuthenticated={isAuthenticated}
                          post={post}/>
                <PageHeader className="subHeader">
                    New Post
                </PageHeader>
                <Row>
                    <Col sm={3}>
                        <div className="input-group">
                            <input ref="title" type="text" defaultValue={title} className="form-control"
                                   placeholder="Title"
                                   onChange={(event) => this.handleOnChange(event)}/>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="input-group">
                            <input ref="tags" type="text" defaultValue={tagString} className="form-control"
                                   placeholder="Tags"
                                   onChange={(event) => this.handleOnChange(event)}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <form className="form-inline" role="form">
                            <div className="form-group">
                        <textarea rows={25} cols={100} ref="blogpost" onChange={(event) => this.handleOnChange(event)}
                                  defaultValue={body}/>
                            </div>
                        </form>
                    </Col>
                </Row>
                <Button type="submit" href="#/blog" disabled={isPosting}
                        onClick={(event) => {this.handleSubmit(event)}}>
                    {isPosting ? "Loading..." : "Submit"}
                </Button>
                <Button type="submit" href="#/blog">Back</Button>
            </Grid>

    }

    componentWillUnmount() {
        const {dispatch} = this.props
        dispatch(updateBlogPreviewContent({body: "", id: -1, tags: "", title: ""}))
    }


    handleSubmit(event) {
        const {dispatch, post} = this.props
        dispatch(addBlogPost(post))
    }

    handleOnChange(event) {
        const summary = this.refs.blogpost.value.trim()
        const tags = this.refs.tags.value
        const title = this.refs.title.value.trim()
        const {dispatch, post} = this.props
        dispatch(updateBlogPreviewContent({body, tags, title, id: post.id}))

    }
}

NewBlogPost.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    console.log(state)
    const {auth, blogApiCall} = state
    const {isAuthenticated} = auth
    const {post, isPosting} = blogApiCall

    return {
        isAuthenticated,
        post,
        isPosting
    }
}

export default connect(mapStateToProps)(NewBlogPost)