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
					<a href={this.state.link}><h2 className="subHeader">{this.state.title}</h2></a>
					<div className="elemContainer">
						<h4>Summary</h4>
						<p>{this.state.summary}</p>
					</div>
				</div>
	}
}