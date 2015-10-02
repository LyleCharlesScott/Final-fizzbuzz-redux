"use strict";

var FizzBuzz = require ('sea-d44-fizz-buzz-ls');

// var buzzer = new FizzBuzz('pen', 'island');
// buzzer.input(15, 2);

// console.log(buzzer.output());

write = function(instance, destination) {
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
  fbFizzBuzz.read(parseInt(document.getElementById('number-one').value),parseInt(document.getElementById('number-two').value));
  document.getElementById('number-one').value = "";
  document.getElementById('number-two').value = "";
  write (fbfizzbuzz, (document.getElementById("result-box"));
  // fbFizzBuzz.write(document.getElementById("result-box"));
});

document.getElementById("clear").addEventListener("click", function(e) {
  e.preventDefault();
  fbFizzBuzz.emptyBox(document.getElementById("result-box"));
});

// activate second FizzBuzz input area
document.getElementById("submitb").addEventListener("click", function(e) {
  e.preventDefault();
  fbBleepBlorp.read(parseInt(document.getElementById('number-oneb').value), parseInt(document.getElementById('number-twob').value));
  document.getElementById('number-oneb').value = "";
  document.getElementById('number-twob').value = "";
  write (fbBleepBlorp, (document.getElementById("result-boxb"));
  // fbBleepBlorp.write(document.getElementById("result-boxb"));
});

document.getElementById("clearb").addEventListener("click", function(e) {
  e.preventDefault();
  fbBleepBlorp.emptyBox(document.getElementById("result-boxb"));
});
