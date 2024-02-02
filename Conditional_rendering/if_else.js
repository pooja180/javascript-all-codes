/*
 here as condition is satistfying then every loop will execute never stop at first

const test = (a) => {
  if (a > 5) {
    console.log("a>5");
  }

  if (a > 7) {
    console.log("a>7");
  }
  if (a > 8) {
    console.log("a>8");
  }
};

test(10);
*/

/*
When you give return statement in if loop:-
        1.  below statement is also statisfing but when you give return without value or wit value also
           then function loop other loop (when you dont write in funcion) will terminate here also.
        2. view below example here first condition statistfy then goes second also satisfiy but when you
        write return in loop that condition :- then net any code wiill not execute (keep in mind)
        3.
        The return statement ends function execution and specifies a value to be returned to the function caller
        4.return value :-	Optional the value to be returned. If omitted, it returns undefined
 */
const a = 10;
// const test = (a) => {
// if (a > 5) {
//   console.log("first");
//   // return;
// }

// if (a > 7) {
//   console.log("second");
//   console.log("a>7");
//   return 7;
// }
// console.log("abc j");
// if (a > 8) {
//   console.log("a>8");
// }
// };

// test(10);

/**************************************************************************** */
/*
  here is normal beheviour when if is true condition never goes next but if is fails then goes net and print that

  

if (a < 5) {
  console.log("first");
} else if (a < 6) {
  console.log("second");
} else {
  console.log("third");
}
*/

/********************************************************************** */
/*
Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2


const num = 7;

if (num > 0) {
  console.log("The sign is +");
} else if (num < 0) {
  console.log("The sign is -");
}

*/
/**
 Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
Sample numbers : 0, -1, 4
Output : 4, 0, -1

Try witout inbuilt sort function.

 */

/*

 According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.
*/

/*

*/

/*
Check if the Year is a Leap Year or Not in C

Conditions for a Leap Year
For any year to be a leap year it must satisfy either of these conditions
1. Year must be divisible by 400 OR.
2. Year must be divisible by 4 and not by 100 at the same time.
*/

const year = 2023;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log("leap year");
} else {
  console.log("not leap year");
}

/*

Tile Teamwork Tactics
In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

Examples
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false
Notes
You cannot move backward (which is why example #3 doesn't work).
If you are already on the same tile, return false, as you would be advancing away.
Expect only positive integer inputs.

Test.assertEquals(possibleBonus(3, 7), true)
Test.assertEquals(possibleBonus(0, 6), true)
Test.assertEquals(possibleBonus(1, 6), true)
Test.assertEquals(possibleBonus(2, 6), true)
Test.assertEquals(possibleBonus(3, 6), true)
Test.assertEquals(possibleBonus(4, 6), true)
Test.assertEquals(possibleBonus(5, 6), true)
Test.assertEquals(possibleBonus(6, 6), false)
Test.assertEquals(possibleBonus(7, 6), false)
Test.assertEquals(possibleBonus(23, 27), true)
Test.assertEquals(possibleBonus(1, 9), false)
Test.assertEquals(possibleBonus(5, 3), false)

*/

function possibleBonus(a, b) {}

/*
Error Messages
Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

The input error will be 1 to 5:

1 >> "Check the fan: e1"
2 >> "Emergency stop: e2"
3 >> "Pump Error: e3"
4 >> "c: e4"
5 >> "Temperature Sensor Error: e5"
For any other value, return 101 (you can use an if statement here).

Examples
error(1) ➞ "Check the fan: e1"

error(2) ➞ "Emergency stop: e2"

error(3) ➞ "Pump Error: e3"
Notes
Do this without using the switch or if statements.

My solution
function error(n) {
	
	const obj={
		1 : "Check the fan: e1",
2 : "Emergency stop: e2",
3 : "Pump Error: e3",
4 : "c: e4",
5 : "Temperature Sensor Error: e5",
	}
	const keys=Object.keys(obj);
	if(!keys.includes(n.toString())){
		return 101;
	}else{
	return obj[n];
	}
}

optimzie solution
function error(n) {
	let obj = {
	1 : "Check the fan: e1",
	2 : "Emergency stop: e2",
	3 : "Pump Error: e3",
	4 : "c: e4",
	5 : "Temperature Sensor Error: e5"
	};
	
	return obj[n] || 101;
}


*/
