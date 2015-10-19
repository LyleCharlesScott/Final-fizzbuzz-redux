'use strict';

var FizzBuzz = require ('sea-d44-fizz-buzz-ls');

var fizzBuzzFrontEnd = (function() {

  var fizzBuzzFrontEnd = function() {};

  var emptyBox = function(destination) {
    if (destination.hasChildNodes()) {
    destination.removeChild(destination.childNodes[0]);
    emptyBox(destination);
  }};

  var write = function(instance, destination, firstUserInputNumber, secondUserInputNumber) {
    var fbOutputArray = instance.output();
    var fbOutputTitle = 'First input: ' + firstUserInputNumber + ' Second input: ' + secondUserInputNumber;
    var fbOutputString = ''; 
    for (var j=0; j < (fbOutputArray.length); j++) {
      fbOutputString += (fbOutputArray[j] + ' ');
    };
    var resultSectionOuterBox = document.createElement('div');
    var resultTitleContainer = document.createElement('p');
    var resultContainer = document.createElement('p');
    var text1 = document.createTextNode(fbOutputTitle);
    var text2 = document.createTextNode(fbOutputString);
    resultTitleContainer.appendChild(text1);
    resultContainer.appendChild(text2);
    resultSectionOuterBox.appendChild(resultTitleContainer);
    resultSectionOuterBox.appendChild(resultContainer);
    destination.insertBefore(resultSectionOuterBox, destination.firstChild);
    resultSectionOuterBox.className = 'output l-output';
  };

  // create three Fizzbuzzes just for sport
  var fbFizzBuzz = new FizzBuzz();
  var fbBleepBlorp = new FizzBuzz('Bleep', 'Blorp');
  if (!rollYourOwn) {
    var rollYourOwn = new FizzBuzz();
  };

  // activate first FizzBuzz input area
  document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    var firstUserInputNumber = parseInt(document.getElementById('number-one').value) || 0;
    var secondUserInputNumber = parseInt(document.getElementById('number-two').value) || 0;
    fbFizzBuzz.input(firstUserInputNumber, secondUserInputNumber);
    document.getElementById('number-one').value = '';
    document.getElementById('number-two').value = '';
    write(fbFizzBuzz, document.getElementById('result-box'), firstUserInputNumber, secondUserInputNumber);
  });

  document.getElementById('clear').addEventListener('click', function(e) {
    e.preventDefault();
    emptyBox(document.getElementById('result-box'));
  });

  // activate second FizzBuzz input area
  document.getElementById('submitb').addEventListener('click', function(e) {
    e.preventDefault();
    var firstUserInputNumber = parseInt(document.getElementById('number-oneb').value) || 0;
    var secondUserInputNumber = parseInt(document.getElementById('number-twob').value) || 0;
    fbBleepBlorp.input(firstUserInputNumber, secondUserInputNumber);
    document.getElementById('number-oneb').value = '';
    document.getElementById('number-twob').value = '';
    write(fbBleepBlorp, document.getElementById('result-boxb'), firstUserInputNumber, secondUserInputNumber);
  });

  document.getElementById('clearb').addEventListener('click', function(e) {
    e.preventDefault();
    emptyBox(document.getElementById('result-boxb'));
  });

// activate third FizzBuzz input area
  document.getElementById('submitc').addEventListener('click', function(e) {
    e.preventDefault();
    var firstUserInputNumber = parseInt(document.getElementById('number-onec').value) || 0;
    var secondUserInputNumber = parseInt(document.getElementById('number-twoc').value) || 0;
    rollYourOwn.input(firstUserInputNumber, secondUserInputNumber);
    document.getElementById('number-onec').value = '';
    document.getElementById('number-twoc').value = '';
    write(rollYourOwn, document.getElementById("result-boxc"), firstUserInputNumber, secondUserInputNumber);
    document.getElementById('first-word').className = '';
    document.getElementById('second-word').className ='';
  });

  document.getElementById('clearc').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('first-word').className = '';
    document.getElementById('second-word').className ='';
    emptyBox(document.getElementById("result-boxc"));
  });
  // activate roll your own buttons
  document.getElementById('roll-new').addEventListener('click', function(e) {
    e.preventDefault();
    rollYourOwn = new FizzBuzz(document.getElementById('first-word').value || 'stink', document.getElementById('second-word').value || 'foot');
    document.getElementById('first-word').classList.add('clicked');
    document.getElementById('second-word').classList.add('clicked');
  })

  return fizzBuzzFrontEnd;
})();
