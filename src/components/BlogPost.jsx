import {Component, PropTypes} from 'react'
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'

export default class BlogPost extends Component {
    render() {
        const {post, onEditClick, onRemoveClick, isAuthenticated} = this.props
        const {body, createdAt, id} = post
        return (<Grid>
            <PageHeader className="subHeader">
                {this.formateDate(new Date(createdAt))}
            </PageHeader>
            <Row>
                {isAuthenticated &&
                (<div>
                    <a href="#/blog/new" onClick={onEditClick}>Edit post</a>
                    <a href="#/blog" onClick={onRemoveClick}> Remove post</a>
                </div>)}
                <ReactMarkdown source={body}/>
            </Row>
        </Grid>)
    }

    formateDate(date) {
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
    }
}


BlogPost.propTypes = {
    post: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
}