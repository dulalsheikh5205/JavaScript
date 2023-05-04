var destinations = ['sajek','coxsbazar','nepal','bali','SP'];
// console.log(destinations[2]);
destinations[2] = 'thailand';
// console.log(destinations[2]);

var index = destinations.indexOf('bali');
// console.log(index);

destinations.push('bhutan');
// console.log(destinations);
destinations.pop();
// console.log(destinations);

// conditionals 
// <, >, ==, !=, <=, >=
// &&, ||
if(destinations[1]=== 'sajek'){

}
else if(destinations[2] === 'bali'){

}
else if(destinations.length !== 3){

}
else{

}

/**
 * 1.==> Array is a collection of similar data elements
 * 2.==> Array index indicates the position of the element within the array
 * 3.==> Array length is the total number of the elements in an array
 * 4.==> The indexOf() method returns the index(position) of a specified value.
 * 5.==> we can replace an element in an array with the help of array indixes=) arrayName[index] = newValue;
 * 6.==> The push() method adds new items to the ends of an array
 * 7.==> The pop() method removes the last element from the end of an array
 * 8.==> comparison operators are used to test for true or false
 * 9.==> The if statement executes if the condition is true
 * 10==> The else statement executes if the condition is false
 * 11.==> Logical Operator, &&, returns true if both statements are true and logical operator, ||, return true if one of the statements is true
 * 12.==> A nested conditional statement is an if or if else statement inside another if else statement
 * 
 *  
 */

// practice problem 1
var fruits = ['Apple','Banana','orange'];
// a) find the index of 'Banana' and replace 'Banana' with 'Mango'.
// b) Remove 'orange' and add 'watermelon'

// ==========a==============
// var index = fruits.indexOf('Banana');
// console.log(index);

// fruits.push('Mango');
// console.log(fruits);

// ===============b=============
// fruits.pop();
// console.log(fruits);
// fruits.push('watermelon');
// console.log(fruits);

// practice problem 2
/** You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom's total score is 66, Janes's total score is 95, Peter's total score is 56 and John's total score is 40. The grading chart is 
 * 80 or above A grade 
 * 60 or above B grade 
 * 50 or above C grade
 * 40 or above D grade
 * 39 or less => F grade
 * write a program to find your and your friend's grades using if-else
 */

var myNumber = 85;
var TomNumber = 66;
var JaneNumber = 95;
var PeterNumber = 56;
var JohnNumber = 40;

if(myNumber % 80){
    console.log('above A grade');
}







