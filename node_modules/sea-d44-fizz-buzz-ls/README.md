# fizzbuzz-redux__W5-A4

Tonight's assignment: refactor your FizzBuzz into a library and publish it to the npm registry.

You will first refactor the object to have an `input` and an `output` method, instead of the "read" and "write" methods.

Just like last night's homework, your constructor should accept arguments that change the strings "Fizz" and "Buzz" (e.g. `new FizzBuzz('Bleep', 'Blorp')`). The `input` method should accept two arguments, `min` and `max`—you may safely assume they are `Numbers`. `output` does not take any arguments, but _must_ return an array.

Your module should expose a function using the CommonJS `module.exports` construct. I should be able to `npm install <your-module>` and use it like so:

```
var FizzBuzz = require('<your-module>');

var buzzer = new FizzBuzz(); // Should accept string arguments that replace 'Fizz' and 'Buzz'
buzzer.input(1, 120);

console.log(buzzer.output());
```

Name your module `sea-d44-fizz-buzz-<your initials>` and publish it to the npm registry. And, as usual, fork this repo and submit a PR.


