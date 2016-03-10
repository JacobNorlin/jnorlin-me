import React from 'react';
import RepoList from './components/RepoList.jsx';
import {videos, projects, experience} from './data/testData.js';
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, Nav, NavItem} from 'react-bootstrap';

import githubIcon from './images/GitHub-Mark-32px.png';

export default class App extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){

	}

	render(){
		return 	<Grid>
		<Row>
			<PageHeader>
				<Col sm={3}>
				</Col>
				<Col smOffset={9}>
					<a href="mailto:jacob.norlinandersson@gmail.com"><Glyphicon glyph="envelope"/></a>
					<a  href="http://github.com/JacobNorlin"><img src={githubIcon}/></a>
				</Col>
			</PageHeader>
		</Row>
		<Row>
			<Navbar>
				<Nav>
					<NavItem eventKey={1} href="#">Home</NavItem>
					<NavItem eventKey={2} href="#">Repo</NavItem>
				</Nav>
			</Navbar>
		</Row>
		<Row>
			<Col sm={6}>
				<PageHeader className="subHeader">
					projects
				</PageHeader>
				<RepoList elements={projects} />
			</Col>
			<Col sm={6}>
				<PageHeader className="subHeader">
					experience
				</PageHeader>
				<RepoList elements={experience} />
			</Col>
		</Row>
		<Row>
			<Col sm={6} smOffset={6}>
				<PageHeader className="subHeader">
					interests
				</PageHeader>
				<li>

				</li>
			</Col>
		</Row>
	</Grid>
	}
}