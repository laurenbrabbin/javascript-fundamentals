## FizzBuzz Challenge

## Exercise 1

Write a fizzBuzz function in JavaScript. As a reminder, this function should take a number as argument, and then either:

1. Return "Fizz" if this number is divisible by 3.
2. Return "Buzz" if this number is divisible by 5.
3. Return "FizzBuzz" if this number is divisible by both 5 and 3.
4. Otherwise, Return the number itself.


Here's an acceptance criteria of how the function should behave:

> fizzBuzz(3); 
'Fizz'

> fizzBuzz(5);
'Buzz'

> fizzBuzz(8);
8

> fizzBuzz(15);
'FizzBuzz'

> fizzBuzz(18);
'Fizz'

> fizzBuzz(20);
'Buzz'

## Exercise 2
You will write tests for the fizzBuzz function you've defined earlier — name the file containing the tests fizzbuzz.test.js.

To complete this exercise, you'll need to:

1. Initialise a new project directory.
2. Use Jest's describe and it syntax.
3. Use Jest matchers to test the different cases above.
4. Use module.exports and require to import the fizzBuzz function in the test file.