1.
Drink Sorting
You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
The output of the sorted drinks object will be:

Examples
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
Notes
N/A

function sortDrinkByPrice(drinks) {
	
}

const drinks1 = [
	{name: 'lemonade', price: 90}, 
	{name: 'lime', price: 432}, 
	{name: 'peach', price: 23}
];

const sorted1 = [
	{name: 'peach', price: 23},
	{name: 'lemonade', price: 90}, 
	{name: 'lime', price: 432}
];

const drinks2 = [
	{name: 'water', price: 120}, 
	{name: 'lime', price: 80}, 
	{name: 'peach', price: 90}
];

const sorted2 = [
	{name: 'lime', price: 80},
	{name: 'peach', price: 90}, 
	{name: 'water', price: 120}
];

Test.assertSimilar(sortDrinkByPrice(drinks1), sorted1, "Object is not sorted.");
Test.assertSimilar(sortDrinkByPrice(drinks2), sorted2, "Object is not sorted.");

-------------------------------2----------------------------------------
Slightly Superior
You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

Create a function that returns whether the first array is slightly superior to that of the second.

Examples
isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false
Notes
Both arrays will be the same length.
All values and their counterparts will always be of the same data type.
If the two arrays are the same, return false.

function isFirstSuperior(arr1, arr2) {
	
}

Test.assertEquals(isFirstSuperior([1, 2, 3, 4], [1, 2, 3, 3]), true)
Test.assertEquals(isFirstSuperior(['a', 'b', 'c'], ['a', 'd', 'c']), false)
Test.assertEquals(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'zebra']), false)
Test.assertEquals(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'ant']), true)
Test.assertEquals(isFirstSuperior([true, true, false, true], [true, true, true, true]), false)
Test.assertEquals(isFirstSuperior([9.1, 8.1, 7.1, 6.1], [9.1, 8.1, 7.1, 5.1]), true)
Test.assertEquals(isFirstSuperior(['llama', 'alligator'], ['llama', 'buffalo']), false)
Test.assertEquals(isFirstSuperior(['zebra', 'ostrich', 'whale'], ['ant', 'ostrich', 'whale']), true)
Test.assertEquals(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]), false)

-------------------------------------------------3-------------------------------------
Burglary Series (20): Sign Your Name
The police send you the electronic statement again for you to sign. This time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well. Unfortunately, the document is still protected against new entries...

This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't use a return statement, it is already included. Your task is, given an object, prevent new properties from being added to that object, but you should still be able to change the value of the existing properties.

Examples
const obj = { yourSignature: "" };

signYourName( obj ) {
  // write your code here


  obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try";
  return obj;

} ➞ { yourSignature: "Whatever" }
Notes
If you have suggestions on how to present or further test this challenge please leave a comment.
This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.

function signYourName(obj) {
  // write your code here
	// don't use a return statement
	
	
  // DON'T CHANGE OR REMOVE THE LINES BELOW
  obj.yourSignature = "Whatever";
	obj.spouseSignature = "Nice Try"
  return obj;
}

Test.assertSimilar(signYourName({yourSignature: ""}), {yourSignature: "Whatever"})

------------------------4----------------------

Scrabble Hand
Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

Here's an example hand:

[
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]
The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.

Examples
maximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]) ➞ 28

maximumScore([
  { tile: "B", score: 2 },
  { tile: "V", score: 4 },
  { tile: "F", score: 4 },
  { tile: "U", score: 1 },
  { tile: "D", score: 2 },
  { tile: "O", score: 1 },
  { tile: "U", score: 1 }
]) ➞ 15
Notes
Here, each tile is represented as an object with two keys: tile and score.

function maximumScore(tileHand) {
	
}

Test.assertEquals(maximumScore([{tile: 'N', score: 1}, {tile: 'K', score: 5},  {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}]), 28);
Test.assertEquals(maximumScore([{tile: 'B', score: 2}, {tile: 'V', score: 4},  {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}]), 15);
Test.assertEquals(maximumScore([{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]), 18);
Test.assertEquals(maximumScore([{tile: 'A', score: 1}, {tile: 'E', score: 1},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]), 7);

-------------------------------------5-------------------------------------
Rounding in Millions
Given an array of cities and populations, return an array where all populations are rounded to the nearest million.

Examples
millionsRounding([
  ["Nice", 942208],
  ["Abu Dhabi", 1482816],
  ["Naples", 2186853],
  ["Vatican City", 572]
])
[
  ["Nice", 1000000],
  ["Abu Dhabi", 1000000],
  ["Naples", 2000000],
  ["Vatican City", 0]
]
Notes
Round down to 0 if a population is below 500,000.

function millionsRounding(arr) {
	
}

// Author: Joshua Señoron

const cities1 = [
	['Tokyo', 37435191],
	['Delhi', 29399141],
	['Shanghai', 26317104]
	]
	
	const cities2 = [
	['Sao Paulo', 21846507]
	]
	
	const cities3 = [
	['London', 9304016],
	['Naples', 	2186853],
	['Nice', 	942208],
	['Abu Dhabi', 1482816],
	['Riga', 	630692],
	['Vatican City', 572]
	]
	
Test.assertSimilar(millionsRounding(cities1), [
	['Tokyo', 37000000],
	['Delhi', 29000000],
	['Shanghai', 26000000]
	])
	
Test.assertSimilar(millionsRounding(cities2), [
	['Sao Paulo', 22000000]
	])
	
Test.assertSimilar(millionsRounding(cities3), [
	['London', 9000000],
	['Naples', 	2000000],
	['Nice', 	1000000],
	['Abu Dhabi', 1000000],
	['Riga', 	1000000],
	['Vatican City', 0]
	])
	
Test.assertSimilar(millionsRounding([]), [])


-------------------------------------6-------------------------------------
Printer Levels
Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

Examples
inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
}) ➞ 10

inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
}) ➞ 432

inkLevels({
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
}) ➞ 0
Notes
A single printed page requires each color once, so printing is not possible if any of the slots lack ink (see example #3).

function inkLevels(inks) {
	
}

Test.assertEquals(inkLevels({
	"cyan": 23,
	"magenta": 12,
	"yellow": 10
}), 10);

Test.assertEquals(inkLevels({
	"cyan": 432,
	"magenta": 543,
	"yellow": 777
}), 432);

Test.assertEquals(inkLevels({
	"cyan": 700,
	"magenta": 700,
	"yellow": 0
}), 0);

Test.assertEquals(inkLevels({
	"cyan": 70,
	"magenta": 700,
	"yellow": 1
}), 1);

Test.assertEquals(inkLevels({
	"cyan": 6543,
	"magenta": 74543,
	"yellow": 2345678
}), 6543);

Test.assertEquals(inkLevels({
	"cyan": 1,
	"magenta": 1,
	"yellow": 1
}), 1);

Test.assertEquals(inkLevels({
	"cyan": 700,
	"magenta": 700,
	"yellow": 700
}), 700);

// made by @Joshua Señoron

------------------------------------7----------------
Converting Objects to Arrays
Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
Notes
Return an empty array if the object is empty.

function toArray(obj) {
	
}

Test.assertSimilar(toArray({ a: 1, b: 2 }), [["a", 1], ["b", 2]])
Test.assertSimilar(toArray({ foo: 33, bar: 45, baz: 67 }), [["foo", 33], ["bar", 45], ["baz", 67]])
Test.assertSimilar(toArray({ shrimp: 15, tots: 12 }), [["shrimp", 15], ["tots", 12]])
Test.assertSimilar(toArray({}), [])

------------------------------8--------------------------------------
Burglary Series (04): Add its Name
Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

Examples
addName({}, "Brutus", 300) ➞ { Brutus: 300 }

addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
Notes
The value argument will be a number.

function addName(obj, name, value) {
	
}
-------------------------------------9--------------------------
ES6: Destructuring Objects IV
const obj =  { first: "James", last: "Baker", alias: "JB"  }

var { first = "John", last = "Doe", alias } = obj

console.log(nickname) // outputs nickname is not defined
There may be times where we would like the property name to be different from the object property names we receive and also give those new property names a default value.

Question
Use ES6 object destructuring to rename the variable alias to nickname and give nickname a default value of "JD". Ignore the .toString() function (used for validation).

Notes
Use double quotes for "JD".
If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.


const str = `({ first = "John", last = "Doe", alias } = { first: "James", last: "Baker" }).toString()`

eval(str)

const validString = (str) => {
  return /\{.*alias.*\:.*nickname.*\=.*\"JD\".*\}/.test(str) ? "valid" : "not valid" 
}
  
Test.assertEquals(validString(str), "valid", "You must rename alias to nickname and give it a default value of JD")
Test.assertEquals(first, "James", "The variable first does not equal James")
Test.assertEquals(last, "Baker", "The variable last does not equal Baker")
Test.assertEquals(nickname, "JD", "The variable nickname does not equal JD")


-----------------------10---------------------------------
Return the Objects Keys and Values
Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
Notes
Remember to sort the keys.

function keysAndValues(obj) {
	
}

Test.assertSimilar(keysAndValues({a: 1, b: 2, c: 3}), [["a", "b", "c"], [1, 2, 3]])
Test.assertSimilar(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}), [["a", "b", "c"], ["Apple", "Microsoft", "Google"]])
Test.assertSimilar(keysAndValues({key1: true, key2: false, key3: undefined}), [["key1", "key2", "key3"], [true, false, undefined]])
Test.assertSimilar(keysAndValues({1: null, 2: null, 3: null}), [["1", "2", "3"], [null, null, null]])
Test.assertSimilar(keysAndValues({key1: "cat", key2: "dog", key3: null}), [["key1", "key2", "key3"], ["cat", "dog", null]])


----------------------------11---------------------------------
Can You Spare a Square?
Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?

Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.

Create a function that will receive an object with two key/values:

people ⁠— Number of people in the household.
tp ⁠— Number of rolls.
Return a statement telling the user if they need to buy more TP!

Examples
tpChecker({ people: 4, tp: 1 }) ➞ "Your TP will only last 2 days, buy more!"

tpChecker({ people: 3, tp: 20 }) ➞ "Your TP will last 58 days, no need to panic!"

tpChecker({ people: 4, tp: 12 }) ➞ "Your TP will last 26 days, no need to panic!"
Notes
Stay safe, and happy coding!

function tpChecker(home) {
	
}

Test.assertEquals(tpChecker({ people: 4, tp: 1 }), "Your TP will only last 2 days, buy more!")
Test.assertEquals(tpChecker({ people: 2, tp: 4 }), "Your TP will last 17 days, no need to panic!")
Test.assertEquals(tpChecker({ people: 3, tp: 20 }), "Your TP will last 58 days, no need to panic!")
Test.assertEquals(tpChecker({ people: 4, tp: 12 }), "Your TP will last 26 days, no need to panic!")
Test.assertEquals(tpChecker({ people: 6, tp: 8 }), "Your TP will only last 11 days, buy more!")
Test.assertEquals(tpChecker({ people: 1, tp: 1 }), "Your TP will only last 8 days, buy more!")

----------------------------------12--------------------
geing the Population...
Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

Examples
afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1) ➞ {
  "Joel" : 33,
  "Fred" : 45,
  "Reginald" : 66,
  "Susan" : 34,
  "Julian" : 14
}

afterNYears({
  "Baby" : 2,
  "Child" : 8,
  "Teenager" : 15,
  "Adult" : 25,
  "Elderly" : 71
}, 19) ➞ {
  "Baby" : 21,
  "Child" : 27,
  "Teenager" : 34,
  "Adult" : 44,
  "Elderly" : 90
}

afterNYears({
  "Genie" : 1000,
  "Joe" : 40
}, 5) ➞ {
  "Genie" : 1005,
  "Joe" : 45
}
Notes
Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
n should be a positive number because last time I checked, people don't tend to age backwards. Therefore, use the absolute value of n.

function afterNYears(names, n) {
	
}

Test.assertSimilar(afterNYears({
	"Joel" : 32,
	"Fred" : 44,
	"Reginald" : 65,
	"Susan" : 33,
	"Julian" : 13
}, 1), {
	"Joel" : 33,
	"Fred" : 45,
	"Reginald" : 66,
	"Susan" : 34,
	"Julian" : 14
})

Test.assertSimilar(afterNYears({
	"Baby" : 2,
	"Child" : 8,
	"Teenager" : 15,
	"Adult" : 25,
	"Elderly" : 71
}, 19), {
	"Baby" : 21,
	"Child" : 27,
	"Teenager" : 34,
	"Adult" : 44,
	"Elderly" : 90
})

Test.assertSimilar(afterNYears({
	"Genie" : 1000,
	"Joe" : 40
}, 5), {
	"Genie" : 1005,
	"Joe" : 45
})

Test.assertSimilar(afterNYears({
	"Adam" : 0,
	"Eve" : 0
}, 800), {
	"Adam" : 800,
	"Eve" : 800
})

Test.assertSimilar(afterNYears({
	"Ambitious Old Scientist" : 87,
	"Ambitious Scientist" : 42,
	"Slightly Concerned Young Scientist" : 23
}, -35), {
	"Ambitious Old Scientist" : 122,
	"Ambitious Scientist" : 77,
	"Slightly Concerned Young Scientist" : 58
})

Test.assertSimilar(afterNYears({
	"USA" : 243,
	"Person" : 27
}, 0), {
	"USA" : 243,
	"Person" : 27
})

// made by @Joshua Señoron


---------------------------------------13--------------------------
Burglary Series (08): Remove an Entry
Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.

Examples
removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate") ➞ { piano: 300, tv: 100 }

removeEntry({ mirror: 500, painting: 1 }, "mirror") ➞ { painting: 1 }
Notes
The object will contain at least two items.
Preferably, mutate the copy, not the original.

function removeEntry(obj, itemName) {
	
}

const random = Math.random()
const obj = {piano: random, tv: 100}
const obj2 = {piano: random, tv: 100, skate: 50}
const res = Object.is(removeEntry(obj, "tv"), obj)
Test.assertEquals(res, false)
Test.assertSimilar(removeEntry(obj, "tv"), {piano: random})
Test.assertSimilar(removeEntry(obj2, "tv"), {piano: random, skate:50})


------------------------------------------14-----------------------------
Calculate the Total Price of Groceries
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}
Examples
// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 bottles of milk:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Several groceries:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Some cheap candy:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3
Notes
There might be a floating point precision problem in here...

function getTotalPrice(groceries) {
	
}

Test.assertEquals(getTotalPrice([
	{ product: "Milk", quantity: 1, price: 1.50 }
]), 1.5)

Test.assertEquals(getTotalPrice([
	{ product: "Milk", quantity: 1, price: 1.50 },
	{ product: "Cereals", quantity: 1, price: 2.50 }
]), 4)

Test.assertEquals(getTotalPrice([
	{ product: "Milk", quantity: 3, price: 1.50 }
]), 4.5)

Test.assertEquals(getTotalPrice([
	{ product: "Milk", quantity: 1, price: 1.50 },
	{ product: "Eggs", quantity: 12, price: 0.10 },
	{ product: "Bread", quantity: 2, price: 1.60 },
	{ product: "Cheese", quantity: 1, price: 4.50 }
]), 10.4)

Test.assertEquals(getTotalPrice([
	{ product: "Chocolate", quantity: 1, price: 0.10 },
	{ product: "Lollipop", quantity: 1, price: 0.20 }
]), 0.3)


---------------------------------------------15----------------------------------
Frequency Distribution
Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

Examples
getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

getFrequencies([]) ➞ {}
Notes
If given an empty array, return an empty object (see example #4).
The object should be in the same order as in the input array.

function getFrequencies(arr) {
	
}
Test.assertSimilar(getFrequencies(['A', 'A']), {A: 2})
Test.assertSimilar(getFrequencies(['A', 'B', 'A', 'A', 'A']), {A: 4, B: 1})
Test.assertSimilar(getFrequencies(['A', 'B', 'C', 'A', 'A']), {A: 3, B: 1, C: 1})
Test.assertSimilar(getFrequencies([true, false, true, false, false]), {'true': 2, 'false': 3})
Test.assertSimilar(getFrequencies([1, 2, 3, 3, 2]), {'1': 1, '2': 2, '3': 2})
Test.assertSimilar(getFrequencies([]), {})

-------------------------------------------16---------------------------
Who's The Oldest?
Given an object containing the names and ages of a group of people, return the name of the oldest person.

Examples
oldest({
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29
}) ➞ "Emma"

oldest({
  Max: 9,
  Josh: 13,
  Sam: 48,
  Anne: 33
}) ➞ "Sam"
Notes
All ages will be different.

function oldest(people) {
	
}

Test.assertEquals(oldest({Charlotte: 53, Oliver: 15, Henry: 18, Gabriel: 46, Violet: 13}), "Charlotte")
Test.assertEquals(oldest({Grayson: 50, Imogen: 63, Logan: 21, Daniel: 64, Rory: 19}), "Daniel")
Test.assertEquals(oldest({Josh: 78, Adam: 63, Aria: 65, Grace: 51, Bella: 37}), "Josh")
Test.assertEquals(oldest({Alex: 9, Jayden: 18, Julia: 43, Penelope: 32, Ella: 34}), "Julia")
Test.assertEquals(oldest({Sam: 65, Joseph: 60, Mia: 41, Thomas: 31, Rebecca: 5}), "Sam")
Test.assertEquals(oldest({Eden: 64, Archie: 18, Olivia: 32, Kai: 84, Harry: 14}), "Kai")
Test.assertEquals(oldest({Anna: 67, Elijah: 10, Cole: 31, Andrew: 24, Elliot: 77}), "Elliot")
Test.assertEquals(oldest({Innes: 77, Lilly: 11, Hallie: 41, Nina: 66, Ryan: 9}), "Innes")
Test.assertEquals(oldest({Isla: 73, Elsie: 6, Frankie: 36, Robbie: 75, Kayla: 9}), "Robbie")
Test.assertEquals(oldest({Jack: 64, Jacob: 33, Tommy: 17, Finn: 5, Isaac: 13}), "Jack")
Test.assertEquals(oldest({Carson: 81, Charlie: 33, Riley: 28, Maria: 39, Sadie: 67}), "Carson")
Test.assertEquals(oldest({Amy: 70, Owen: 11, Matilda: 64, Lexi: 37, Lena: 26}), "Amy")
Test.assertEquals(oldest({Lola: 45, Tyler: 23, Hope: 4, Phoebe: 86, Freya: 44}), "Phoebe")
Test.assertEquals(oldest({Hollie: 48, Harris: 24, Ava: 72, Alfie: 9, Louis: 47}), "Ava")
Test.assertEquals(oldest({Erica: 32, Eve: 82, Harper: 74, Summer: 38, Ben: 72}), "Eve")
Test.assertEquals(oldest({Michael: 63, Jessica: 65, Reuben: 25, Aiden: 82, Emily: 18}), "Aiden")
Test.assertEquals(oldest({Brooke: 8, Lucy: 44, Cooper: 33, Ellie: 82, Millie: 7}), "Ellie")
Test.assertEquals(oldest({Piper: 10, Quinn: 62, David: 20, John: 61, Noah: 17}), "Quinn")
Test.assertEquals(oldest({Cara: 5, Max: 81, Lucas: 62, Sophie: 71, Amelia: 79}), "Max")
Test.assertEquals(oldest({Leo: 29, Clara: 8, Florence: 69, Lewis: 38, James: 47}), "Florence")


---------------------------------------17---------------------------
Burglary Series (13): Sort That List
The insurance guy tells you he needs an updated list of the stolen goods, and surely only to annoy you, he adds, "in reverse alphabetical order".

Given an object with the stolen items, return a new object with the list in reverse alphabetical order.

Examples
{ c: 100, a: 50, b: 10, d: 50 } ➞ { d: 50, c: 100, b: 10, a: 50 }

{ ab: 10, ac: 10, ad: 10 } ➞ { ad: 10, ac: 10, ab: 10 }

{ piano: 5, stereo: 10, suitcase: 1 } ➞ { suitcase: 1, stereo: 10, piano: 5 }
Notes
Please note that one should not rely on property order of an ordinary Object: Although the keys of an ordinary Object are ordered now, they didn't used to be, and the order is complex. As a result, it's best not to rely on property order. MDN Source

function sortList(obj) {
	
}

const random = Math.random()
const obj = {
    c: 100,
    a: 50,
    b: 10,
    d: 50,
};
const obj2 = {ab: 10, ac: 10, ad: 10}
const obj3 = {piano: random, stereo: 10, suitcase: 1}

Test.assertSimilar(sortList(obj),{ d: 50, c: 100, b: 10, a: 50 })
Test.assertSimilar(sortList(obj2),{ ad: 10, ac: 10, ab: 10 })
Test.assertSimilar(sortList(obj3),{ suitcase: 1, stereo: 10, piano: random })