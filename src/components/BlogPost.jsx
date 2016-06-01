import {Component, PropTypes} from 'react'
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'
import Tag from './Tag.jsx'

export default class BlogPost extends Component {
    render() {
        const {post, onEditClick, onRemoveClick, isAuthenticated} = this.props
        const {body, createdAt, updatedAt, title, tags, id} = post
        const tagList = tags.split(" ")
        return (<Grid>

            <Row>
                <Col sm={8}>
                    <PageHeader className="subHeader">
                        <a href={"#/blog/?postId="+id}>{title}</a>
                    </PageHeader>
                    <small className="subHeader">
                        Last changed: {this.formatDate(updatedAt)}
                    </small><br/>
                    <small>
                        {
                            tagList.map(tag => {
                                return <Tag tag={tag} type="blog"/>
                            })
                        }
                    </small>
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

    formatDate(dateString) {
        let date
        if(dateString){
            date = new Date(dateString)
        }else{
            date = new Date()
        }
        return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
    }
}


BlogPost.propTypes = {
    post: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func
}