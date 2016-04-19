import {Component, PropTypes} from 'react'
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'

export default class BlogPost extends Component{
	render(){
		const {body, createdAt} = this.props
		return (<Grid>
			<Row>
				{new Date(createdAt).toString()}
			</Row>
			<Row>
				<ReactMarkdown source={body}/>
			</Row>
		</Grid>)	
	}
}

BlogPost.propTypes = {
	createdAt: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
}