"use strict"
import React from 'react';

export default class ProjectElem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			link: props.link,
			repo: props.repo,
			description: props.description,
			title: props.title
		}
	}

	render(){
		return <div>
					<h3>{this.state.title}</h3>
					<div><b>Homepage:</b> <a>{this.state.link}</a></div>
					<div><b>Repo:</b> <a>{this.state.repo}</a></div>
					<div><b>Description:</b> <p>{this.state.description}</p></div>
				</div>
	}
}