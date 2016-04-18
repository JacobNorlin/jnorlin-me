import React from 'react';
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav, Button} from 'react-bootstrap';
import LoginButton from './LoginButton.jsx';
import PostCalendar from './PostCalendar.jsx';

export default class Blog extends React.Component{
	constructor(props){
		super(props);
	}

	componentWillMount(){
		//Fetch blogposts
	}

	render(){
		return <Grid>
			<Col sm={9}>
				//BlogPost/s
			</Col>
			<Col sm={3}>
				<LoginButton/>
				<PostCalendar /*posts={}*//>
			</Col>
		</Grid>
	}
}