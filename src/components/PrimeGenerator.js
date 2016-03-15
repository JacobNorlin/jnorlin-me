"use strict";

import Rx from 'rx';
import isPrime from 'is-number-prime';

export default function primeObservable(rate){

		 // let initialDistribution = [{label:"lol", values:[{x:"0", y:0}, {x:"1", y:0}, {x:"2", y:0}, {x:"3", y:0} , {x:"4", y:0}, {x:"5", y:0}, {x:"6", y:0}, {x:"7", y:0}, {x:"8", y:0}, {x:"9", y:0}]}],


		return Rx.Observable
			.interval(rate)
			.map((x) => {
				return x
			})
			.filter(isPrime)
			.map(x => {
				return x % 10;
			})
			.scan((acc, p, i, source) => {
				acc[p]+=1;
				return acc;
			}, new Array(10).fill(0));
	
}

