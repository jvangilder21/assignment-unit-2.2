// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we have a variable called name and set it to Dane
//  if the variable called name is an exact match to the string Mary the console display will output Hi, Mary!
// if the variable is not an exact match the conlse display will output How do you do?
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//  we have a variable secret that is not set. we set the variable code to 123. 
// so if our code variable is an exact match to the number 123 our variable secret will output the sting super & our code variable will output the total of code * 2, 246.
// if our code variable is over 250, our console will output for secret as duper.
// if our code variable is = to 250 or > 123 or is less than 123 it will not have an output.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// our isStudent variable is set to true, age is set to the number 34, and zip is set to the number 55407.
// if the variable is student has an exact match to true and the zip is > 80000, the console will display: You're a student on the West Coast!. If it doesn't match both continue to the next condition.
// if the isStudent is not an exact true match and is false or age is less than 30 the console will display: What are your hobbies?. If it doesn't match both continue to the next condition.
// if the isStudent is a exact match the console display will outpput: Welcome to Prime! If it doesn't match both continue to the next condition.
//if the variable does not meet any of the conditions the console will display: How about the weather?

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//colorOne should be set to blue and colorTwo should be set to red.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//colorTwo should be in the if statement if mix is true colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//the if statement is or (||) not and (&&)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//the first console.log should be console.log('enter'); the else console should have 'no entry'
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

