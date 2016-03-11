import React from 'react';
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav} from 'react-bootstrap';

import githubIcon from './images/GitHub-Mark-32px.png';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.props = props;
	}

	componentWillMount(){

	}

	render(){
		return 	<Grid>
		<Row>
			<PageHeader>
				<Col sm={3}>
				:^)
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
					<NavItem eventKey={1} href="#/personal">Personal</NavItem>
					<NavItem eventKey={2} href="#/repo">Repo</NavItem>
				</Nav>
			</Navbar>
		</Row>
		{this.props.children}
	</Grid>
	}
}