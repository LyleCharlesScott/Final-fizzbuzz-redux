"use strict";

module.exports = (function() {
  
  var FizzBuzz = function(Fizz, Buzz) {
    this.firstFizz = Fizz || 'Fizz';
    this.secondBuzz = Buzz || 'Buzz';
  };

  var _calculate = function(min, max, firstFizz, secondBuzz) {
    var fbOutputArray = [];
    for (var i = min; i <= max; i++) { 
      var output = ''; 
      if (i%3 === 0) { 
        output += firstFizz; 
      }
      if (i%5 === 0) {
        output += secondBuzz; 
      }
      if (output === "") { 
        output = i; 
      }
      fbOutputArray.push(output);
    }
    return fbOutputArray;
  };

  FizzBuzz.prototype.input = function(min, max) {
    if (!min) {
      min = 0;
    }
    if (!max) {
      max = 0;
    }
    if (min > max) {
      min = min + max;
      max = min - max;
      min = min - max;
    }
    this.min = min;
    this.max = max;
    this.fbOutputArray = _calculate(min, max, this.firstFizz, this.secondBuzz);
  };

  FizzBuzz.prototype.output = function() {
    return this.fbOutputArray;
  };

  return FizzBuzz;
})();