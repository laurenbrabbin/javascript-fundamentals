## Phase 1 Challenges
This file contains all the challenges I completed for Phase 1. Below is a breakdown of each challenge completed

## Chapter 4 - Functions

## Exercise 1

Define (in a file sayHello.js) the function sayHello, which returns the string 'Hello'.

Require and call that function in node - you should get the following result:

```javascript
> sayHello();
'Hello'
```

## Exercise 2
Modify the previous function sayHello so it accepts one argument, and calling sayHello('Sarah') displays a personalised message:

```javascript
> sayHello('Sarah');
'Hello Sarah'
```

## Exercise 3 
1. Define a function add (in a file add.js) which takes two arguments and return their sum.
2. Define a function multiply (in a file multiply.js) which takes two arguments and return their product.
3. From node, require and call the functions add and multiply to calculate and print the following: 2 * (4 + 4). You should get the correct result (16).




## Chapter 5 - Conditionals

## Exercise 1

To complete the following, you will have to:

use if, else if and else to write conditionals.
use the strict equality operator === to compare values.

1. Define a function getNumberSign that takes a number and returns either 'zero', 'positive' or 'negative' depending on its sign:

```javascript
> getNumberSign(3);
'positive'

> getNumberSign(0);
'zero'

> getNumberSign(-5);
'negative'
```

## Exercise 2
A colleague just asked you some help to debug their code.

```javascript
const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length == validLength) {
    true;
  } else {
    false;
  }
}
```

When calling this function, something doesn't work as expected. What fix can you suggest to solve the problem?

You'll know the function works if you manage to have the expected output when running in node:

```javascript
> isValidLength('00');
false

> isValidLength('00112233445');
true
```

## Exercise 3 
Write a fizzBuzz function in JavaScript. As a reminder, this function should take a number as argument, and then either:

1. Return "Fizz" if this number is divisible by 3.
2. Return "Buzz" if this number is divisible by 5.
3. Return "FizzBuzz" if this number is divisible by both 5 and 3.
4. Otherwise, Return the number itself.
Here's an acceptance criteria of how the function should behave:

```javascript
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
```



## Chapter 6 - Loops

## Exercise 1

This challenge builds on the previous one, where you defined a fizzBuzz function.

Write a function fizzbuzzUntil that accepts a number. This function should use a loop to loop through all numbers from 1 to the given one, call the fizzBuzz function for the current number and print the result.

You should get the following output:

```javascript

const fizzbuzzUntil = require('./fizzbuzzUntil');

fizzbuzzUntil(10);

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
```



## Chapter 7 - Functions as values

## Exercise 1

1. Declare a function lowercaseMessage that returns the lowercase version of the given string.

2. Declare a function transform that behaves like the one above:

3. takes one string and one function as arguments
calls the function on the given string.
Call transform by giving it the string 'WHY ARE YOU SHOUTING?' and the function lowercaseMessage. It should return a lowercase version of the message ('why are you shouting?')

## Exercise 2

1. Declare a function notifyByEmail that accepts an email address as argument and returns the string 'Email sent to: <EMAIL>'.
2. Declare a function notifyByText that accepts a phone number (as a string) as argument and returns the string 'Text sent to: <PHONE NUMBER>'.
3. Now declare a generic function notify that accepts a first string argument (either an email or a phone), and the function to use in second argument. This function should only rely on calling the function passed in second argument, not declare a string by itself.
4. Use the function notify with the two previous functions to:
  send an email to hello@makers.tech.test and get the expected output.

  send a text to +10000000000 and get the expected output.




## Chapter 8 - Callbacks

## Exercise 1

1. Declare a function printHello which prints a greeting message.
2. Use setTimeout to execute this function after a 3 seconds delay.

## Exercise 2

Declare a function executeAfterDelay which calls the given function after the given delay in seconds:

```javascript
const printHello = () => {
  console.log('Hello!');
}

executeAfterDelay(5, printHello);

// After about 5 seconds, you should see the message being logged

Hello!
```

## Exercise 3

In this challenge you'll need to use the function setInterval. It works the same way as setTimeout, but rather than executing the given function once after a delay, it executes it repeatedly. For example, if we give 2000 for the number of milliseconds, the function will execute every 2 seconds:

```javascript
setInterval(myFunction, 2000); // myFunction will execute every 2 seconds
```

In a new file counter.js:

1. Declare a variable counter initialised at the value 0 — this value will need to change, so use let rather than const.
2. Declare a function called increment that:
increments the value of counter by 1
and prints it using console.log
3. Using setInterval, call this function every second so the counter is incremented and printed every second.

If you've done the above correctly, you should be able to run the file and see the counter being incremented and printed every second:

```javascript
$ node counter.js
1
2
3
(...)
```



## Chapter 9 - Arrays

## Exercise 1

Create an array of all numbers from 1 to 10. Calculate the sum of all these numbers by looping through the array.

You can use the method forEach to iterate over each element.

## Exercise 2

You are helping your friend, who owns a candies business, with their website. Every order placed on the website gets assigned an order ID, such as 1274.

Your friend would like to create batches of five order IDs. They ask you if you could give a hand and write a small program to do this.

Questions
1. Declare a function addToBatch that takes two arguments, an array and a number, and returns a new array by adding the number to the array.
2. Now, make sure this function does not add the number if the array's length is already 5 or greater — it should just return the array untouched in that case.

Once your function is written, you should be able to type the following code and have the exact same output:

```javascript
> addToBatch([1], 3); 
[ 1, 3 ]

> addToBatch([1, 2, 3], 4); 
[ 1, 2, 3, 4 ]

> addToBatch([], 8); 
[ 8 ]

> addToBatch([1, 2, 3, 4, 5, 6], 7); 
[ 1, 2, 3, 4, 5, 6 ]

> addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); 
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```



## Chapter 10 - Objects

## Exercise 1

```javascript
const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};
```
Print the value of the city attribute ('London').
Print the value of the second hobbies value ('tennis').

## Exercise 2

Declare an object cohort that has the following properties:

1. a string name (e.g 'May2022')
2. a number id (e.g 1234)
3. an array of student names

Declare a function that accepts that object as argument and print a message with the following structure:

<COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort




## Chapter 11 - Array operations

## Exercise 1

our friend now wants to launch a special promotion. They give you a long list of phone numbers so you can create a small program to text everyone. You notice some lines in the file are not phone numbers, but some corrupted data:

```javascript
1763687364
4763687363
7867867862
AAAA#####AAAA#87@768767382672  <-- not a phone number!
4763687363
4763687363
(...)
```

However, you realise that most phone numbers on the list are no longer than 10 digits. Maybe you could just implement a JavaScript function to do the filtering for you!

Questions:

1. Declare a function checkLength that takes a phone number (as a string) as argument, and returns true if this phone number contains 10 characters or less.
2. Now declare a function filterLongNumbers that takes an array of phone numbers. This function should return only numbers that contain 10 characters or less. It should make use of the function checkLength written previously.

Once your function is written, you should be able to type the following code and have the exact same output:

```javascript
> const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

> filterLongNumbers(numbers);
[ '1763687364', '4763687363', '7867867862' ]

> filterLongNumbers(['4763687363', '7867867862']); // no number to filter out
[ '4763687363', '7867867862' ]

> filterLongNumbers([])
[ ]
```

## Exercise 2

Your friend now would you like to also generate a personalised message for the SMS promotion. Along with the phone numbers, you also now have a list of names:


```javascript
const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
```

Questions
1. Write a function generateMessages that takes an array of names and returns an array of personalised messages for each name. For example, when given the array above, the function should return an array with the first element being the string 'Hi Anna! 50% off our best candies for you today!', the second element the string 'Hi Laura! 50% off our best candies for you today!', and so on.

Once your function is written, you should be able to type the following code and have the exact same output:

```javascript
const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

generateMessages(names);
[
  'Hi Anna! 50% off our best candies for you today!',
  'Hi Laura! 50% off our best candies for you today!',
  'Hi Josh! 50% off our best candies for you today!',
  'Hi Min! 50% off our best candies for you today!',
  'Hi Karla! 50% off our best candies for you today!'
]
```

## Exercise 3

Let's go back to our candy promotion texts. Your friend now wants to have a specific discount percentage for each customer. After processing the list you're given, you end up with the following array:

```javascript
// An array of objects!
> const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];
```

Questions

1. Modify the function generateMessages so it uses this new structure and write the correct discount percentage in each message.

Once your function is written, you should be able to type the following code and have the exact same output:

```javascript
> const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

> generateMessages(namesAndDiscounts);
[
  'Hi Anna! 50% off our best candies for you today!',
  'Hi Laura! 40% off our best candies for you today!',
  'Hi Josh! 30% off our best candies for you today!',
  'Hi Min! 50% off our best candies for you today!',
  'Hi Karla! 60% off our best candies for you today!'
]
```



## Chapter 12 - Classes

## Exercise 1

Given the following array of User instances (the class from the previous exercise):

```javascript
const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];
```

We'd now like to have a class UserBase that behaves like this:

```javascript
const userBase = new UserBase(users);

userBase.count();
3

userBase.getNames();
[ 'Uma', 'Josh', 'Ollie' ]

userBase.getIntroductions();
[
  'Hi, my name is Uma',
  'Hi, my name is Josh',
  'Hi, my name is Ollie'
]
```

To complete this exercise, you will have to:

1. declare a new class and its methods.
2. use what you've previous learned on working with arrays, like the map method.
call methods from the User class.
3. Implement the UserBase class in a file userBase.js so it behaves exactly like in the example code above.

Require the two classes into the node REPL to verify it's working.
