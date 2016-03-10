import React from 'react';
import RepoList from './components/RepoList.jsx';
import {videos, projects, experience} from './data/testData.js';
import {Row, Col, Glyphicon, Grid, PageHeader} from 'react-bootstrap';

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
			<Col sm={6}>
				<PageHeader>
					<h2 className="subHeader">projects</h2>
				</PageHeader>
				<RepoList elements={projects} />
			</Col>
			<Col sm={6}>
				<PageHeader>
					<h2 className="subHeader">experience</h2>
				</PageHeader>
				<RepoList elements={experience} />
			</Col>
		</Row>
		<Row>
			<Col sm={6} smOffset={6}>
				<PageHeader>
					<h2 className="subHeader">interests</h2>
				</PageHeader>
				<li>

				</li>
			</Col>
		</Row>
	</Grid>
	}
}