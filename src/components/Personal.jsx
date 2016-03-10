"use strict";
import React from 'react'
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import RepoList from './RepoList.jsx';


export default class Personal extends React.Component{

	constructor(props){
		super(props);
		
	}
	
	render(){
		return <Row>
			<Row>
				<Col sm={6}>
					<PageHeader className="subHeader">
						projects
					</PageHeader>
					<RepoList elements={this.props.route.projects} />
				</Col>
				<Col sm={6}>
					<PageHeader className="subHeader">
						experience
					</PageHeader>
					<RepoList elements={this.props.experience} />
				</Col>
			</Row>
			<Row>
				<Col sm={6} smOffset={6}>
					<PageHeader className="subHeader">
						interests
					</PageHeader>
				</Col>
			</Row>
		</Row>
	}

}