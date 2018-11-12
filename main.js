'use strict'

let primes = require('./prime.js');
let print = require('./table.js');

var n = process.argv[2];

function primeProduct(primes){

	let length = primes.length;

	var product = primes.map(() => {
		return new Array(length);
	});

	primes.forEach(function(prime, index, set) {
		for(let i=0; i<=index; i++){
			product[index][i] = product[i][index] = prime * set[i];
		}
	});

	return product;	
}

function addRowCol(table, primes) {

	let N = primes.length;

	table.forEach((row, index) => {
		row.unshift(primes[index]);
	});

	let firstRow = primes.map( (prime) => {
		return prime;
	});
		
	firstRow.unshift("X");
	table.unshift(firstRow);

	console.log("\n" + " Multiplication on first " + N + " Prime numbers : " + "\n");
	return table;
		
}

let primeList = primes.findPrime(n);
let products = primeProduct(primeList);
let contents = addRowCol(products, primeList);

let table = print.createTable(contents);

process.stdout.write(table + "\n");