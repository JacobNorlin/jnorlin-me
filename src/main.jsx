import React from 'react';
import RepoList from './components/RepoList.jsx';
import {videos, projects} from './data/testData.js';

export default class App extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){

	}

	render(){
		return 	<div className="container-fluid">
		<div className="page-header header">
			<h1>JNR</h1>
		</div>
		<div className="row">
			<div className="col-sm-6">
				<div className="page-header">
					<h2>projects</h2>
				</div>
				<RepoList elements={projects} />
			</div>
			<RepoList elements={videos}/>
			<div className="col-sm-6">
				<div className="page-header">
					<h2>experience</h2>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-sm-offset-6 col-sm-6">
				<div className="page-header">
					<h2>interests</h2>
				</div>
				<li>

				</li>
			</div>
		</div>
	</div>
	}
}