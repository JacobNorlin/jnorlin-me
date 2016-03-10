"use strict";
import React from 'react'
import {Grid, Row, Col, Navbar, Nav, NavItem, PageHeader} from 'react-bootstrap';
import RepoList from './RepoList.jsx';


export default class Personal extends React.Component{

	constructor(props){
		super(props);
	}
	
	render(){
		return <Row>
			<Col sm={6}>
				<PageHeader className="subHeader">
					videos
				</PageHeader>
				<RepoList elements={this.props.route.videos} />
			</Col>
		</Row>
	}

}