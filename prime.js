'use strict'

exports.isPrime = function(num){

	if (isNaN(num) || num <= 0 || num % 1 !== 0) {
	    throw new Error(" Please Enter Positive Integer!");
	}
	
	let res = true;
	if(num < 2 || (num > 2 && num % 2 === 0)){
		res = false;
	}
	else{
		for(let i=2; i<= Math.sqrt(num); i++){
			if(num % i === 0){
				res = false;
				break;
			}
		}
	}
	
	return res;
};

exports.findPrime = function(n){
	let primeNum = [];
	let count=0, cur=2;

	n = n || 10; // default value is 10	

	if (isNaN(n) || n <= 0 || n % 1 !== 0) {
    	throw new Error(" Please Enter Positive Integer!");
  	}

	while(count < n){
		if(exports.isPrime(cur)){
			primeNum.push(cur);
			count++;
		}
		cur++;
	}

	return primeNum;
};