import {Component, PropTypes} from 'react'
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'

export default class BlogPost extends Component{
	render(){
		const {post, onEditClick, isAuthenticated} = this.props
		const {body, createdAt, id} = post
		return (<Grid>
			<PageHeader>
				Post {this.formateDate(new Date(createdAt))}
			</PageHeader>
			<Row>
				{isAuthenticated && <a href="#/blog/new" onClick={onEditClick}>Edit post</a>}
				<ReactMarkdown source={body}/>
			</Row>
		</Grid>)	
	}

	formateDate(date){
		return date.getYear()+"-"+date.getMonth()+"-"+date.getDay()
	}
}


BlogPost.propTypes = {
	post: PropTypes.object.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	onEditClick: PropTypes.func.isRequired
}