"use strict";

import Rx from 'rx';
import isPrime from 'is-number-prime';

export default class NumberGenerator{
	constructor(){
		this.pauser = new Rx.Subject();
	}

	getPrimeLastDigitDistributionStream(rate){
		return this.getPrimeStream(rate)
			.map(x => {
				return x % 10;
			})
			.scan((acc, p, i, source) => {
				acc[p]+=1;
				return acc;
			}, new Array(10).fill(0));
	}

	getPrimeStream(rate){
		return Rx.Observable
			.interval(rate)
			.map((x) => {
				return x
			})
			.filter(isPrime)
			.pausable(this.pauser);
	}

	pauseStream(){
		this.pauser.onNext(false);
	}

	startStream(){
		this.pauser.onNext(true);
	}
}


