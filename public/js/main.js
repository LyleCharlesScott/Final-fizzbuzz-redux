(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";

var FizzBuzz = require ('sea-d44-fizz-buzz-ls');

// var buzzer = new FizzBuzz('pen', 'island');
// buzzer.input(15, 2);

// console.log(buzzer.output());
var fizzBuzzFrontEnd = (function() {

  var fizzBuzzFrontEnd = function() {};

  var emptyBox = function(destination) {
    if (destination.hasChildNodes()) {
    destination.removeChild(destination.childNodes[0]);
    emptyBox(destination);
  }};

  var write = function(instance, destination, firstUserInputNumber, secondUserInputNumber) {
    var fbOutputArray = instance.output();
    var fbOutputTitle = "First input: " + firstUserInputNumber + " Second input: " + secondUserInputNumber;
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

  // create three Fizzbuzzes just for sport
  var fbFizzBuzz = new FizzBuzz();
  var fbBleepBlorp = new FizzBuzz('Bleep', 'Blorp');
  if (!rollYourOwn) {
    var rollYourOwn = new FizzBuzz();
  };

  // activate first FizzBuzz input area
  document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();
    var firstUserInputNumber = parseInt(document.getElementById('number-one').value) || 0;
    var secondUserInputNumber = parseInt(document.getElementById('number-two').value) || 0;
    fbFizzBuzz.input(firstUserInputNumber, secondUserInputNumber);
    document.getElementById('number-one').value = "";
    document.getElementById('number-two').value = "";
    write(fbFizzBuzz, document.getElementById("result-box"), firstUserInputNumber, secondUserInputNumber);
    // fbFizzBuzz.write(document.getElementById("result-box"));
  });

  document.getElementById("clear").addEventListener("click", function(e) {
    e.preventDefault();
    emptyBox(document.getElementById("result-box"));
  });

  // activate second FizzBuzz input area
  document.getElementById("submitb").addEventListener("click", function(e) {
    e.preventDefault();
    var firstUserInputNumber = parseInt(document.getElementById('number-oneb').value) || 0;
    var secondUserInputNumber = parseInt(document.getElementById('number-twob').value) || 0;
    fbBleepBlorp.input(firstUserInputNumber, secondUserInputNumber);
    document.getElementById('number-oneb').value = "";
    document.getElementById('number-twob').value = "";
    write(fbBleepBlorp, document.getElementById("result-boxb"), firstUserInputNumber, secondUserInputNumber);
  });

  document.getElementById("clearb").addEventListener("click", function(e) {
    e.preventDefault();
    emptyBox(document.getElementById("result-boxb"));
  });

// activate third FizzBuzz input area
  document.getElementById("submitc").addEventListener("click", function(e) {
    e.preventDefault();
    var firstUserInputNumber = parseInt(document.getElementById('number-onec').value) || 0;
    var secondUserInputNumber = parseInt(document.getElementById('number-twoc').value) || 0;
    rollYourOwn.input(firstUserInputNumber, secondUserInputNumber);
    document.getElementById('number-onec').value = "";
    document.getElementById('number-twoc').value = "";
    write(rollYourOwn, document.getElementById("result-boxc"), firstUserInputNumber, secondUserInputNumber);
    document.getElementById('first-word').className = '';
    document.getElementById('second-word').className ='';
  });

  document.getElementById("clearc").addEventListener("click", function(e) {
    e.preventDefault();
    emptyBox(document.getElementById("result-boxc"));
  });
  // activate roll your own buttons
  document.getElementById('roll-new').addEventListener('click', function(e) {
    e.preventDefault();
    rollYourOwn = new FizzBuzz(document.getElementById('first-word').value || 'pen', document.getElementById('second-word').value || 'island');
    document.getElementById('first-word').classList.add('clicked');
    document.getElementById('second-word').classList.add('clicked');
  })

  return fizzBuzzFrontEnd;
})();

},{"sea-d44-fizz-buzz-ls":1}]},{},[2]);
