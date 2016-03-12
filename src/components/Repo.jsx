"use strict";
import React from 'react'
import {Grid, Row, Col, Navbar, Nav, NavItem, PageHeader} from 'react-bootstrap';
import RepoList from './RepoList.jsx';


export default class Personal extends React.Component{

	constructor(props){
		super(props);
	}
	
	render(){
		return <Grid> 
		<Row>
			<PageHeader className="subHeader">
				Repo
			</PageHeader>
			<p>
			A repository of videos and shit I found interesing. Will compile stuff I watch here and try to summarize what I saw in an attempt to actually learn or remember something. Optimally I should add one thing a day.
			</p>
		</Row>
		<Row>
			<Col sm={6}>
				<PageHeader className="subHeader">
					videos
				</PageHeader>
				<RepoList elements={this.props.route.videos} />
			</Col>
			<Col smOffset={6}>
				<PageHeader className="subHeader">
					texts
				</PageHeader>
				<RepoList elements={this.props.route.texts} />
			</Col>
		</Row>
		</Grid>
	}

}