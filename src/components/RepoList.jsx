"use strict";
import React from 'react';
import _ from 'lodash';
import ProjectElem from './ProjectElem.jsx';
import RepoElem from './RepoElement.jsx';

export default class RepoList extends React.Component{
	constructor(props){
		super(props);
		this.state = {elements: props.elements};
	}

	_createElement(data){
		//This feel dumb
		if(data.type === "project"){
			return <ProjectElem link={data.link} repo={data.repo} description={data.description} title={data.title} key={data.title} />
		}
		else if(data.type === "repo"){
			return <RepoElem link={data.link} summary={data.summary} title={data.title} key={data.title} />
		}
	}

	_createList(){
		//Should try to get Array.map to work...
		return _.map(this.state.elements,  this._createElement);
	}

	render(){
		let a = this._createList();
		return React.createElement('ul', {}, a);
	}
}
RepoList.propTypes = {
	elements: React.PropTypes.array
}