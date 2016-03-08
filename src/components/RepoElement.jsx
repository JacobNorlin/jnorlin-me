"use strict"
import React from 'react';

export default class ProjectElem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			link: props.link,
			summary: props.summary,
			title: props.title
		}
	}

	render(){
		return <div>
					<h2>{this.state.title}</h2>
					<div className="elemContainer">
						<a>{this.state.link}</a>
						<h4>Summary</h4>
						<p>{this.state.summary}</p>
					</div>
				</div>
	}
}