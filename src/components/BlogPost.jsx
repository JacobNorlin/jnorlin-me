import {Component, PropTypes} from 'react'
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'
import Tag from './Tag.jsx'

export default class BlogPost extends Component {
    render() {
        const {post, onEditClick, onRemoveClick, isAuthenticated} = this.props
        const {body, createdAt, id, title, tags} = post
        const tagList = tags.split(" ")
        return (<Grid>
            <PageHeader className="subHeader">
                {title}
            </PageHeader>
            <small className="subHeader">
                {createdAt == undefined ?
                (this.formateDate(new Date())) : (this.formateDate(new Date(createdAt)))}
            </small><br/>
            <small>
                {
                    tagList.map(tag => {
                        return <Tag tag={tag}/>
                    })
                }
            </small>
            <Row>
                <Col sm={8}>
                    {isAuthenticated && (onEditClick !== undefined) &&
                    (<div>
                        <a href="#/blog/new" onClick={onEditClick}>Edit post</a>
                        <a href="#/blog" onClick={onRemoveClick}> Remove post</a>
                    </div>)}
                    <ReactMarkdown source={body}/>
                </Col>
            </Row>
        </Grid>)
    }

    formateDate(date) {
        return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
    }
}


BlogPost.propTypes = {
    post: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func
}