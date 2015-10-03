/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var FizzBuzz = __webpack_require__ (1);

	// var buzzer = new FizzBuzz('pen', 'island');
	// buzzer.input(15, 2);

	// console.log(buzzer.output());

	var write = function(instance, destination) {
	  var fbOutputArray = instance.output();
	  var fbOutputTitle = "Low number: " + "GET THE LOW NUMBER HERE SOMEHOW" + " High number: " + "GET THE HIGH NUMBER HERE SOMEHOW";
	  var fbOutputString = ""; 
	  for (var j=0; j < (fbOutputArray.length); j++) {
	    fbOutputString += (fbOutputArray[j] + " ");
	  };
	  var resultSectionOuterBox = document.createElement("div");
	  resultSectionOuterBox.className = "output l-output";
	  var resultTitleContainer = document.createElement("p");
	  var resultContainer = document.createElement("p");
	  var text1 = document.createTextNode(fbOutputTitle);
	  var text2 = document.createTextNode(fbOutputString);
	  resultTitleContainer.appendChild(text1);
	  resultContainer.appendChild(text2);
	  resultSectionOuterBox.appendChild(resultTitleContainer);
	  resultSectionOuterBox.appendChild(resultContainer);
	  destination.insertBefore(resultSectionOuterBox, destination.firstChild);
	};

	// create two Fizzbuzzes just for sport
	var fbFizzBuzz = new Fizzbuzz();
	var fbBleepBlorp = new Fizzbuzz('Bleep', 'Blorp');

	// activate first FizzBuzz input area
	document.getElementById("submit").addEventListener("click", function(e) {
	  e.preventDefault();
	  fbFizzbuzz.input(parseInt(document.getElementById('number-one').value), parseInt(document.getElementById('number-two').value));
	  document.getElementById('number-one').value = "";
	  document.getElementById('number-two').value = "";
	  write(fbfizzbuzz, document.getElementById("result-box"));
	  // fbFizzBuzz.write(document.getElementById("result-box"));
	});

	document.getElementById("clear").addEventListener("click", function(e) {
	  e.preventDefault();
	  fbFizzBuzz.emptyBox(document.getElementById("result-box"));
	});

	// activate second FizzBuzz input area
	document.getElementById("submitb").addEventListener("click", function(e) {
	  e.preventDefault();
	  fbBleepBlorp.input(parseInt(document.getElementById('number-oneb').value), parseInt(document.getElementById('number-twob').value));
	  document.getElementById('number-oneb').value = "";
	  document.getElementById('number-twob').value = "";
	  write(fbBleepBlorp, document.getElementById("result-boxb"));
	  // fbBleepBlorp.write(document.getElementById("result-boxb"));
	});

	document.getElementById("clearb").addEventListener("click", function(e) {
	  e.preventDefault();
	  fbBleepBlorp.emptyBox(document.getElementById("result-boxb"));
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);