"use strict"
import {connect} from 'react-redux'
import {Component, PropTypes} from 'react'
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav, Button} from 'react-bootstrap'
import LoginButton from './LoginButton.jsx'
import PostCalendar from './PostCalendar.jsx'
import {fetchPosts} from '../actions/blog.js'
import BlogPost from './BlogPost.jsx'

class Blog extends Component{

	componentWillMount(){
		const {dispatch, user} = this.props
		//Fetch blogposts
		dispatch(fetchPosts({username: "test"}))
	}

	render(){
		const {posts} = this.props

		return <Grid>
			<Col sm={9}>
					{posts.map(o => {
						const {createdAt, body} = o
						return (<BlogPost body={body} createdAt={createdAt}/>)
					})}
			</Col>
			<Col sm={3}>
				<PostCalendar /*posts={}*//>
			</Col>
		</Grid>
	}
}

Blog.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state){
	const {blogPosts, auth} = state
	const {isAuthenticated, user} = auth
	const {posts} = blogPosts

	return {
		isAuthenticated,
		posts,
		user
	}
}

export default connect(mapStateToProps)(Blog)