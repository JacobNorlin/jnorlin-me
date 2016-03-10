"use strict";
import React from 'react';
import _ from 'lodash';
import ProjectElem from './ProjectElem.jsx';
import ExperienceElem from './ExperienceElem.jsx';
import RepoElem from './RepoElement.jsx';

export default class RepoList extends React.Component{
	constructor(props){
		super(props);
		this.state = {elements: props.elements};
	}

	_createElement(data){
		//This feel dumb
		console.log(data.type);
		switch(data.type){
			case "project":
				return <ProjectElem link={data.link} repo={data.repo} description={data.description} title={data.title} key={data.title} />
			case "repo":
				return <RepoElem link={data.link} summary={data.summary} title={data.title} key={data.title} />
			case "experience":
				return <ExperienceElem location={data.location} description={data.description} title={data.title} workPlace={data.workplace} timeRange={data.timeRange} key={data.workplace} />
			
		}
	}

	_createList(){
		//Should try to get Array.map to work...
		return _.map(this.state.elements,  this._createElement);
	}

	render(){
		let a = this._createList();
		return <div> {a} </div>
	}
}
RepoList.propTypes = {
	elements: React.PropTypes.array
}