1.In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

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

function possibleBonus(a, b) {
	
}

2.
Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

Use the following formulas:

Perimeter of a square: 4 * side.
Perimeter of a circle: 6.28 * radius.
The catch is you can only use arithmetic or comparison operators, which means:

No if... else statements.
No objects.
No arrays.
No formatting methods, etc.
The goal is to write a short, branch-free piece of code.

Examples
perimeter("s", 7) ➞ 28

perimeter("c", 4) ➞ 25.12

perimeter("c", 9) ➞ 56.52
Notes
No rounding is needed.

function perimeter(l, num){
	
}

Test.assertEquals(perimeter("s", 1), 4)
Test.assertEquals(perimeter("s", 4), 16)
Test.assertEquals(perimeter("s", 9), 36)
Test.assertEquals(perimeter("s", 13), 52)
Test.assertEquals(perimeter("s", 30), 120)
Test.assertEquals(perimeter("c", 1), 6.28)
Test.assertEquals(perimeter("c", 4), 25.12)
Test.assertEquals(perimeter("c", 9), 56.52)
Test.assertEquals(perimeter("c", 13), 81.64)
Test.assertEquals(perimeter("c", 30), 188.4)


3.
Find Number of Digits in Number
Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1
Notes
Try to solve this challenge without using strings!

Test.assertEquals(num_of_digits(13124), 5)
Test.assertEquals(num_of_digits(0), 1)
Test.assertEquals(num_of_digits(-12381428), 8)
Test.assertEquals(num_of_digits(12), 2)
Test.assertEquals(num_of_digits(42), 2)
Test.assertEquals(num_of_digits(1000), 4)
Test.assertEquals(num_of_digits(136), 3)
Test.assertEquals(num_of_digits(1000000000), 10)
Test.assertEquals(num_of_digits(2147483647), 10)
Test.assertEquals(num_of_digits(-2147483647), 10)

function num_of_digits(num) {
	
}

4.
Find the nth Tetrahedral Number
A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.

Create a function that takes an integer n and returns the nth tetrahedral number.

Alternative Text

Examples
tetra(2) ➞ 4

tetra(5) ➞ 35

tetra(6) ➞ 56
Notes
There is a formula for the nth tetrahedral number.

function tetra(n) {
	
}

Test.assertEquals(tetra(1), 1)
Test.assertEquals(tetra(2), 4)
Test.assertEquals(tetra(3), 10)
Test.assertEquals(tetra(4), 20)
Test.assertEquals(tetra(5), 35)
Test.assertEquals(tetra(9), 165)

.
5.
Convenience Store
Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false

changeEnough([0, 0, 20, 5], 0.75) ➞ true

changeEnough([30, 40, 20, 5], 12.55) ➞ true

changeEnough([10, 0, 0, 50], 3.85) ➞ false

changeEnough([1, 0, 5, 219], 19.99) ➞ false
Notes
quarter: 25 cents / $0.25
dime: 10 cents / $0.10
nickel: 5 cents / $0.05
penny: 1 cent / $0.01

function changeEnough(change, amountDue) {
	
}

Test.assertEquals(changeEnough([2, 100, 0, 0], 14.11), false);
Test.assertEquals(changeEnough([0, 0, 20, 5], 0.75), true);
Test.assertEquals(changeEnough([30, 40, 20, 5], 12.55), true);
Test.assertEquals(changeEnough([10, 0, 0, 50], 13.85), false);
Test.assertEquals(changeEnough([1, 0, 5, 219], 19.99), false);
Test.assertEquals(changeEnough([1, 0, 2555, 219], 127.75), true);
Test.assertEquals(changeEnough([1, 335, 0, 219], 35.21), true);



-----------------------------------------Test2-----------------------------------------------