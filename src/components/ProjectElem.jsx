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
					{this.state.link ? <div><a href={this.state.link}>Homepage</a></div> : null}
					<div><a href={this.state.repo}>Repository</a></div>
					<div><b>Description</b> <p>{this.state.description}</p></div>
				</div>
	}
}