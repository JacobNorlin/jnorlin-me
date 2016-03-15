"use strict";

import d3 from 'd3';
import NumberGenerator from './PrimeGenerator.js';
import {BarChart} from 'react-d3-components';
import React from 'react';
import {Row, Col, Grid, PageHeader, Button, Input} from 'react-bootstrap';
import _ from 'lodash';


export default class NumberDistribution extends React.Component {

	constructor(props){
		super(props);
		let numberGenerator = new NumberGenerator();

		this.state =  {
			data: [{label:"lol", values:[{x:"0", y:0}, {x:"1", y:0}, {x:"2", y:0}, {x:"3", y:0} , {x:"4", y:0}, {x:"5", y:0}, {x:"6", y:0}, {x:"7", y:0}, {x:"8", y:0}, {x:"9", y:0}]}],
			numberGenerator: numberGenerator,
			startValue: 1,
			stop: false
		}
	}

	startGen(event){
		let gen = this.state.numberGenerator.getPrimeLastDigitDistributionStream(1, this.state.startValue);
		this.setState({stop:false});
		gen.takeWhile(this.shouldStop.bind(this))
		.subscribe(d => {
			let old = this.state.data;
			for(let i = 0; i < 10; i++){
				old[0].values[i].y = d[i];
			}
			this.setState((prev, next) => {
				return {data: old}
			})
		});
		this.state.numberGenerator.startStream();		
	}

	shouldStop(){
		console.log(this.state);
		return !this.state.stop;
	}

	stopGen(){
		this.setState({stop:true})
	}

	componentWillUnmount(){
		this.state.numberGenerator.pauseStream();
	}



	render(){
		return <Grid>
		<Row>
		<PageHeader className="subHeader">
		prime number distribution
		</PageHeader>
		<p>A continuously updating chart of the distribution of the last digit in primes</p>
		<Input
		type="number"
		value={this.state.startValue}
		label="Starting number"
		onChange={(e) => this.setState({startValue: e.target.value})}
		/>
		<Button bsStyle="primary" onClick={this.startGen.bind(this)}>Start</Button>
		<Button bsStyle="primary" onClick={this.stopGen.bind(this)}>Stop</Button>
		<BarChart
		data={this.state.data}
		width={400}
		height={400}
		margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
		</Row>
		</Grid>


	}

}