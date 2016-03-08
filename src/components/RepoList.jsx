"use strict";
import React from 'react';
import _ from 'lodash';

export default class RepoList extends React.Component{
	constructor(props){
		super(props);
		this.state = {elements: props.elements};
	}

	_createElement(data){
		return <li key={data.link}>
					<h2>{data.title}</h2>
					<div className="elemContainer">
						<a>{data.link}</a>
						<p>{data.summary}</p>
					</div>
				</li>
	}

	_createList(){
		//Should try to get Array.map to work...
		return _.map(this.state.elements,  this._createElement);
	}

	render(){
		let a = this._createList();
		console.log(a);
		return React.createElement('ul', {}, a);
	}
}
RepoList.propTypes = {
	elements: React.PropTypes.array
}