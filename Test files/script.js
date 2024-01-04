"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 234;

// // <<<<<----- Functions ----->>>>> //
// function logger(a) {
//   console.log(`My name is ${a}`);
// }

// logger(65 + 35);

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(4, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // <<<<<----- Function Declaration vs Expressions ----->>>>> //
// // Function Declaration -- "special" can be called before it is defined
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1997);
// console.log(age1);

// // Function Expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age2);

// // <<<<<----- Arrow Function ----->>>>> //
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1998);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement}`;
// };

// console.log(yearsUntilRetirement(1991, "Thomas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// // <<<<<----- Functions calling other functions ----->>>>> //

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apple slices and ${orangePieces} orange slices.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// // <<<<<----- Functions review ----->>>>> //

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement >= 0) {
//     return `${firstName} will retire in ${retirement} years`;
//   } else {
//     return `${firstName} retired ${Math.abs(retirement)} years ago`;
//   }

//   // return retirement;
//   // return `${firstName} retires in ${retirement}`;
// };

// console.log(yearsUntilRetirement(1991, "jonas"));
// console.log(yearsUntilRetirement(1970, "mike"));

// // <<<<<----- Intro to Arrays ----->>>>> //

// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(y);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// // friends = ["Bob", "Alice"]; // cant do this

// // can combine many different items and variables into an array
// const firstName = "Jonas";
// const jonas = [firstName, "Person", 2037 - 1991, "teacher", friends];

// console.log(jonas);
// console.log(jonas.length);

// //Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// // <<<<<----- Basic Array Operations (Methods) ----->>>>> //

// // add elements
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay"); // .pop() method returns the array length as value

// console.log(friends);
// console.log(newLength);

// const newLength2 = friends.unshift("John"); //.unshift() method also returns the array length as value
// console.log(friends);
// console.log(newLength2);

// // remove elements
// friends.pop(); // Removes last element
// const popItem = friends.pop(); // does not return array length. but returns value of item removed
// console.log(friends);
// console.log(popItem);

// const shiftItem = friends.shift(); // Removes first element
// console.log(friends);
// console.log(shiftItem);

// // finding index of an item
// console.log(friends.indexOf("Steven")); // if found returns the index of the item
// console.log(friends.indexOf("Bob")); // if not found returns -1 for does not exist

// friends.push(23);
// console.log(friends.includes("Steven")); // checks if the item exists and returns true
// console.log(friends.includes("Bob")); // if item doesnt exist then returns false
// console.log(friends.includes("23")); // the number value 23 is added. this will return false sense it is checking for 23 the string. includes does not do type coercion
// console.log(friends.includes(23)); // this checks for the number value so it will return true

// // can use includes for conditionals
// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

// // <<<<<----- Intro to Objects ----->>>>> //
// // review for arrays
// const jonasArray = [
//   "jonas",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steven"],
// ];

// // beggining with objects

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["michael", "peter", "steven", "adding", "too", "the", "array"],
// };

// // <<<<<----- Dot vs Bracket Notation ----->>>>> //

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";

// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about jonas? choose bettween: firstName, lastName, age, job, and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(`The selected property "${interestedIn}" does not exist`);
// }

// //adding to objects
// jonas.location = "Somewhere";
// jonas["twitter"] = "added string";

// console.log(jonas);

// // in video challange
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
// );

// // <<<<<----- Object methods ----->>>>> //

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["michael", "peter", "steven"],
//   hasDriversLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },
//   // calcAge: function () {
//   //   console.log(this)
//   //   return 2037 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(jonas.calcAge());
// // console.log(jonas["calcAge"]());
// console.log(jonas.age);

// // Challenge

// console.log(jonas.getSummary());

// <<<<<----- Part 2 Challenge #3 ----->>>>> //

/*

CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.*/

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
//   summary: function () {
//     return `${
//       this.fullName
//     }'s BMI (${this.calcBMI()}) is higher than John Smith's (${john.calcBMI()})!`;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
//   tion() {
//     return `${
//       this.fullName
//     }'s BMI (${this.calcBMI()}) is higher than Mark Miller's (${mark.calcBMI()})!`;
//   },
// };
// console.log(mark.calcBMI() > john.calcBMI() ? mark.summary() : john.summary());

// // <<<<<----- Iteration: The for Loop ----->>>>> //

// for (let rep = 1; rep <= 10; rep++) {
//   console.log("count " + rep);
// }

// <<<<<----- Looping Arrays, Breaking and Continuing ----->>>>> //
// const jonasArray = [
//   "jonas",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steven"],
//   true,
//   false,
//   "testing",
//   1,
//   2,
//   3,
// ];

// const types = [];
// console.log(types);

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);

//   //adding items to an array
//   types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// contine and break
// continue with string
// console.log("---CONTINUE WITH STRING---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }
// //break with number
// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// // <<<<<----- Looping Backwards and Loops in Loops ----->>>>> //

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(jonasArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`Exercise ${exercise} starting--`);
//   for (let set = 1; set < 4; set++) {
//     console.log(`-Set #${set} begin:`);
//     for (let rep = 1; rep < 9; rep++) {
//       console.log(`-${rep}`);
//     }
//   }
// }

// <<<<<----- The while Loop ----->>>>> //

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight: Rep #${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight: Rep #${rep}`);
  rep++;
}

let roll = 0;
while (roll !== 6) {
  roll = Math.trunc(Math.random() * 6) + 1;
  console.log(roll);
  if (roll === 6) {
    console.log("turn is over...");
  }
}

/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
[]Create an array called bills containing all 10 test bill values.
[]Create empty arrays for the tips and the totals (tips and totals)
[]Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/
