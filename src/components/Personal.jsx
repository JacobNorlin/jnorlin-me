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
					<Col sm={3}>
						<h4 className="subHeader">programming</h4>
							<ul>
								<li>JS</li>
								<li>C#</li>
								<li>Scala</li>
								<li>Java</li>
							</ul>
					</Col>
					<Col sm={3} smOffset={3}>
						<h4 className="subHeader">interests</h4>
						<ul>
							<li>Language engineering</li>
							<li>Information visualization</li>
							<li>Programming language design</li>
							<li>HCI</li>
						</ul>
					</Col>
				</Col>
			</Row>
		</Row>
	}

}