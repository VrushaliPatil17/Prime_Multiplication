'use strict'

var assert = require("assert");
var nums = require('./prime.js');
var table = require('./table.js');

  
describe('Prime Module', function () {
 	
  	describe('First N primes function', function () {

	    it('should return 10 numbers if nothing is passed as input', function () {
	      assert.equal(nums.findPrime().length, 10);
	    });

	    it('should return N numbers if N is passed as input', function () {
	      assert.equal(nums.findPrime(15).length, 15);
	      assert.equal(nums.findPrime(5).length, 5);
	    });

	    it('should return only prime numbers', function () {
	      assert.deepEqual(nums.findPrime(), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
	    });

  	});


  	describe('isPrime function', function () {
    
	    it('should throw an error if input is not a positive integer', function () {
	      assert.throws(nums.isPrime, Error, " Please Enter Positive Integer!");
	    });
	    
	    it('should pass all primary tests', function () {
	      assert.equal(nums.isPrime(2), true);
	      assert.equal(nums.isPrime(19), true);
	      assert.equal(nums.isPrime(27), false);
	      assert.equal(nums.isPrime(37), true);
	      assert.equal(nums.isPrime(73), true);
	      assert.equal(nums.isPrime(95), false);
	    });

  	});

});

describe('Table Module', function () {

  it('should print data as Table', function () {
    assert.equal(table.createTable([[1,2,3],[4,5,6],[7,8,9]]), "1 2 3\n4 5 6\n7 8 9");
  });

});