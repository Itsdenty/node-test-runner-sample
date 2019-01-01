/*
 * Unit Tests
 *
 */

// Dependencies
var libFunctions = require('./../app/lib.js');
var assert = require('assert');

// Holder for Tests
var unit = {};


// Assert that the generateDummyName function is returning a string
unit['libFunctions.generateDummyName should return a string'] = function(done){
  var val = libFunctions.generateDummyName();
  assert.equal(typeof(val), 'string');
  done();
};

// Assert that the generateDummyName function is returning a string with character length of 10
unit['libFunctions.generateDummyName should have character length of 7'] = function(done){
  var val = libFunctions.generateDummyName().length;
  assert.equal(val, 7);
  done();
};

// Assert that the flipString function is returning a string
unit['libFunctions.flipString should return a string'] = function(done){
  var val = libFunctions.flipString('communication');
  assert.equal(typeof(val), 'string');
  done();
};

// Assert that the flipString function will not crash when supplied with invalid parameter
unit['libFunctions.flipString should return false for invalid parameter'] = function(done){
  var val = libFunctions.flipString(true);
  assert.equal(val, false);
  done();
};

// Assert that the flipString function is flipping the string
unit['libFunctions.flipString should reverse a string'] = function(done){
  var val = libFunctions.flipString('communication');
  assert.equal(val[0], 'n');
  done();
};

// Assert that the slugIt function is returning a string
unit['libFunctions.slugIt should return a string'] = function(done){
  var val = libFunctions.slugIt('this is slugged');
  assert.equal(typeof(val), 'string');
  done();
};

// Assert that the slugIt function is slugging a string
unit['libFunctions.flipString should slug a string'] = function(done){
  var val = libFunctions.slugIt('this is slugged');
  assert.equal(val.includes('_'), true);
  done();
};

// Assert that the slugIt function will not crash when supplied with invalid parameter
unit['libFunctions.slugIt should return false for invalid parameter'] = function(done){
  var val = libFunctions.slugIt(true);
  assert.equal(val, false);
  done();
};

// Export the tests to the runner
module.exports = unit;