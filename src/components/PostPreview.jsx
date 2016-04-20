import {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

class PostPreview extends Component{


    render(){
        const {post} = this.props
        const {body, id} = post
        console.log(post)
        return (
            <Grid>
                <ReactMarkdown source={body}/>
            </Grid>
        )
    }


}

PostPreview.propTypes = {
    post: PropTypes.object.isRequired
}

function mapStateToProps(state){
    const {addBlogPost} = state
    const {post} = addBlogPost
    return {post}
}

export default connect(mapStateToProps)(PostPreview)