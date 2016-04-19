/**
 * Created by Jacob on 2016-04-19.
 */
import {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, Button, PageHeader} from 'react-bootstrap'
import {addBlogPost} from '../actions/blog.js'

class NewBlogPost extends Component {


    render() {
        const {isAuthenticated} = this.props

        return isAuthenticated && <Grid>
            <PageHeader>
                    New Post
            </PageHeader>
            <form className="form-inline" role="form">
                <div className="form-group">
                    <textarea className="form-control" ref="blogpost" placeholder="Field 1" />
                </div>
            </form>
            <Button type="submit" onClick={(event) => {this.handleSubmit(event)}}>Submit</Button>
        </Grid>

    }

    handleSubmit(event) {
        const body = this.refs.blogpost.value.trim()
        console.log(this.props)
        const {dispatch} = this.props

        dispatch(addBlogPost(body))

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