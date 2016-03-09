"use strict"
import React from 'react';
import _ from 'lodash';

export default class ExperienceElem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			description: props.description,
			title: props.title,
			workplace: props.workplace,
			timeRange: props.timeRange,
			location: props.location
		}
	}

	_parseTime(timerange){
		let rows = _.map(timerange, (date) => {
			return <div key={date}>
						<p className="date">{date}</p>
					</div>
		});
		return <div>
					{rows}
				</div>
	}

	render(){
		return <div className="container experienceElem">
					<div className="col-sm-4">
						<h3>{this.props.workPlace}</h3>
						<em>{this.props.location}</em>
						<div className="">
							<h2>{this.props.title}</h2>
						</div>
						<div >
							<p>{this.props.description}</p>
						</div>
					</div>
					<div className="col-sm-offset-4">
							{this._parseTime(this.props.timeRange)}
						</div>

				</div>
	}
}