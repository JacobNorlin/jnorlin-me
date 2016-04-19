import {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

class PostPreview{


    render(){
        const {post} = this.props
        console.log(post)
        return (
            <Grid>
                <ReactMarkdown source={post}/>
            </Grid>
        )
    }

}

PostPreview.propTypes = {
    post: PropTypes.string.isRequired
}

function mapStateToProps(state){
    console.log(state)
    const {updateBlogPreview} = state
    const {post} = updateBlogPreview
    return {post}
}

export default connect(mapStateToProps)(PostPreview)