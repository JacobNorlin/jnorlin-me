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
					<RepoList elements={this.props.route.experience} />
				</Col>
			</Row>
			<Row>
				<Col sm={6}>
					<PageHeader className="subHeader">
						skills and interests
					</PageHeader>
					<ul>
						<li>Javascript/node</li>
						<li>C#</li>
						<li>Java</li>
						<li>Scala</li>
						<li>Language engineering</li>
					</ul>
				</Col>
			</Row>
		</Row>
	}

}