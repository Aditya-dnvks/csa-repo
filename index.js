// console.log("External JS");

// // for (let i = 0; i < 10000000; i++) {
// //   console.log("tyuio");
// // }

// console.log("loop eneded");

// const clicked = () => {
//   alert("Clicked");
// };

// let x = 10.9999999; // dynamic typed language - Error - Type Script
// x = `Hello World`; // collection of characters "" '' ``
// x = false;

// let y = undefined + 1; // NaN
// console.log(typeof y);

// -------------------------------------------------20.11.2024---------------------------------------------------- //

// data types
// 1. Primitive - number, string, boolean, undefined, null,NaN - immutable
// 2. Non-Primitive - arrays, objects, map,set - mutable - All Data Structures

// let x = [1, 4, 7];
// let y = x;
// x.push(0);
// console.log(y); // primitive - call by value

// console.log("5" - 3); // implicit type coersion
// console.log(Boolean(NaN)); //explicit // 0, false, "", undefined, null,NaN

// let arr = [1, 2, 3, 4, 5, "string", true]; // array of collection of items
// arr[0] = "Chnaged";
// let obj = {
//   id: 1,
//   name: "Aditya"
// }
// console.log(typeof typeof 100);

// let x = BigInt(1234567890123456789023456789345678);
// console.log(x);

// let today = new Date();
// console.log(today);

// let x = 1;
// x--; // 0
// console.log(++x); // 0  // -1
// console.log(x); // -1

// let x = 100;
// x %= 10; // x = x % 10
// console.log(x);

// console.log(null + undefined);

// console.log(2 !== "3");

// === "strict equal to"
// both value & DT
// == " loose equal to"
// Checks only value not DT

// -------------------------------------------------21.11.2024---------------------------------------------------- //

//syntactic sugar - class
// prototype based language

// logical operators:
// && , || , !

// let height = 100;
// let age = 20;
// console.log(height > 50 && age > 18); // true
// console.log(true && false); // false
// console.log(false &&  true); // false
// console.log(false &&  false) // false

// console.log(height> 100 || age> 18) // true
// console.log(true || false) // true
// console.log(false || true) // true
// console.log(false || false) // false

// console.log(!!true);
// console.log(!(true || false)); // true

// conditional operators:
// if/if else/switch/if else if/

// let age = 3
// let height = 100

// if (age === "3" || height > 50) {
//   console.log("This is if block");
//   // code block
// } else {
//   console.log("This is else block");
// }

// let time = 30;

// if (time < 6) {
//   // condition1
//   console.log("Midnight. Time to sleep"); // 1st if block
// } else if (time < 12) {
//   // condition2
//   console.log("Good Morning"); // 2nd if block
// } else if (time < 18) {
//   // condition3
//   console.log("Good Afternoon"); // 3rd if block
// } else if (time < 24) {
//   console.log("Good Evening");
// } else {
//   console.log("Enter a valid time");
// }

// const dayCode = 2;
// let day;

// switch (dayCode) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     day = "Invalid Day Code";
// }

// console.log(day);

// let a; // initialization & declaration
// a = 20;
// a = "String";
// a = true;
// console.log("let:", a);

// const b = 10
// console.log("const:", b);

// const angleA = 40;
// const angleB = 60;
// const angleC = 80;

// if (angleA + angleB + angleC === 180) {
//   console.log("forms a triangle");
// } else {
//   console.log("Invalid angles. Cant form a triangle");
// }

// const sideA = 4;
// const sideB = 10;
// const sideC = 3;

// // sum of two sides must be greater than 3rd side

// const condition1 = sideA + sideB > sideC;
// const condition2 = sideB + sideC > sideA;
// const condition3 = sideA + sideC > sideB;

// if (condition1 && condition2 && condition3) {
//   console.log("forms a triangle");
// } else {
//   console.log("Invalid sides. Cant form a triangle");
// }

// const angleA = 60;
// const angleB = 100;
// const angleC = 20;

// if (angleA + angleB + angleC === 180) {
//   console.log("Can form a triangle");

//   if (angleA === 60 && angleB === 60 && angleC === 60) {
//     console.log("Equilateral Triangle");
//   } else if (angleA === angleB || angleB === angleC || angleC === angleA) {
//     console.log("Isoceless Triangle");
//   } else {
//     console.log("This is a Scalene Triangle");
//   }
// } else {
//   console.log("Invalid angles. Cant form a triangle");
// }

// -------------------------------------------------23.11.2024---------------------------------------------------- //

// const number = 100;

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// Loops

// For, While

// const n = 3;

// for (let i = 0; i < n; i++) {
//   console.log(i); // 3times
// }

// console.log("Loop ended");
// Dry run:
// 1st iteration:
// i =0 ---> 0 < 3 ---> True ---> 0 ---> i = 1

// 2nd iteration:
// i = 1 ---> 1< 3 ---->  True ----> 1 ---> i++ ---> i = 2

// 3rd iteration:
// i = 2 --- > 2<3 -- > True ---> 2 ---> i++ ---> i =3

// last iteration
// i =3 ---> 3<3 ---> False ---> "Loop ends"

// const string = "hello world!";

// const n = string.length;

// for (let i = 0; i < n; i++) {
//   console.log(string[i]); // n items
// }

// string iteration

// for (let i = 100; i >= 0; i--) {
//   console.log("Countdown:", i);
// }

// console.log("Countdwon completed");

//1st iteration : i = 10 ---> 10> 0 ---> True ---> countdown: 10 --> i = 9
//2nd itertation: i =9 ---> 9 > 0 --->  true --->  9 --- > i = 8

//11th: i = 0---> 0> 0 ---> False --> "LOOP ENDS"

// const number = 20;
// const tableNumber = 37;
// for (let i = tableNumber; i <= tableNumber * number; i = i + tableNumber) {
//   console.log(i);
// }

// i = 3, 3 < 180 --> 3 ---> i =6
// i = 6, 6< 180 --->  6 ---> i = 9

// camelCase -- JS
// snake-case -- CSS selectors
// PascalCase -- React compoennts
// kabab_case -- Python
// Capital letters - Constants, API Keys --- PI

// const iAmCamelCaseVariable = 4;

// -------------------------------------------------25.11.2024---------------------------------------------------- //

// while

// let i = 0; // initialization
// while (i < 3) {
//   //condition

//   console.log(i);
//   //infinite loop

//   i--;
// }

// console.log("loop ends");

//dry run:
// 1st iteration: i =0 ; 0 < 3 ---> true ----> 0 ---> i = 1
// 2nd iteration i = 1; 1<3 ---> true ---> 1 --->  i = 2
//3d iteration: i = 2 ; 2 < 3 ---> true --- > 2 ----> i = 3
// 4th iteration: i = 3; 3<3 --> falses ---> loop termindates

// let i = 0;

// do {
//   console.log("Hello");
//   i++;
// } while (i < 5);

// for (let i = 9; i <= 100; i = i + 20) {
//   console.log(i);
// }

// Arrays: --> Data structure --- > Collection of items

// CRUD --->
// C---> Create
// R --> Read
// U ---> Update
// D ---> Delete

// const myArr = [1, 2, 3, "string", true, 2.5, undefined, null];

// myArr.splice(0, 1);

// console.log(myArr);

// myArr[8] = "New"; ---> Value not there so new slot created
// myArr.push("New");
// myArr[myArr.length] = "New";

// myArr.push(true);

// myArr[0] = 100; // Item with given ID exist -- > So Value gets updated

// const popVar = myArr.pop();
// console.log(popVar);
// myArr.pop();
// myArr.pop();
// myArr.pop();

// console.log(myArr);

// pop, push, length, splice
// slice, includes, concat, indexOf, lastIndexOf, join, split, shift, unshift

// const myArr = [1, 2, 3, "string", true, 2.5, 2, undefined, null, 2]; // non-primitive

// console.log(myArr.lastIndexOf(2));

// const joinArr = ["Hello", "World", "!", "You", "are", "welcome"];

// console.log(joinArr.join("-")); // array ---> string

// const splitString = "Hello World! You are Welcome";
// console.log(splitString.split("")); /// string --- >array

// const myArr = [1, 2, 3, "string", true, 2.5, 2, undefined, null, 2]; // non-primitive

// const slicedArr = myArr.slice(5, 0);
// console.log(slicedArr);
// console.log(myArr);

// const str = "Hello world";
// const slicedStr = str.substring(5, 1);

// console.log(slicedStr);

// myArr.shift(); //1
// myArr.shift(); //2
// myArr.shift(); // 3 // deletes the first of the array --- returns the deleted element
// console.log(myArr.shift()); //string

// const unshifted = myArr.unshift("Start"); // push or unshift ---> returns length of arr after addition
// console.log(unshifted); // push --> end, shift ---> start
// console.log(myArr); //10

// const userName = "Strying";

// if (myArr.includes(userName)) {
//   console.log("valid user");
// } else {
//   console.log("Invalid user. User not found in database");
// }

// -------------------------------------------------26.11.2024---------------------------------------------------- //

// length, slice, index, lastIndexOf,split, includes, concat -- common methods for str, arr

// toUpperCase(), toLowerCase(), endsWith(), startsWith(), charAt(), replace(), charCodeAt()
// substring(). trim()
// const string = "the quick brown fox jumps over the lazy dog"; // collection of characetrs - pangram

// // strings are immutable **** -- PRIMITIVE data types
// // non - primitive ---> Mutable -- Arr, Obj, Map

// // ASCII

// console.log(string);

// const arr = [4, 100, 7, 8, 2, 66, 88, 10, 6];

// console.log(
//   arr.sort(function (a, b) {
//     return b - a;
//   })
// ); // sort by value

// const arr2 = ["s", "a", "k", "o", "c"];
// arr2.sort(); // lexigographical - dictionary
// console.log(arr2);

// const myArr = [1, 4, 6, 7, 8, 0];

// let sum = 0;
// let product = 1;
// for (let i = 0; i < myArr.length; i++) {
//   sum += myArr[i]; // sum = sum + myArr[i]
//   product *= myArr[i];
// }

// console.log(sum, product);

// const myArr = [1, 4, 6, 7, 8, 0];

// for (let item of myArr) {
//   item++;
//   console.log(item * 5);
// }

// const string = "6uhytgrfvecd";

// for (let char of string) {
//   console.log(char);
// }

// for (let i = 0; i < string.length; i++) {
//   console.log(string[i]);
// }

// objects --- Data structure -- Non primitve data type

// const myObj = {
//   name: "Aditya",
//   age: 24,
//   job: "dev",
// };

// console.log(myObj.profession);

// -------------------------------------------------27.11.2024---------------------------------------------------- //

// Type coerscions - implicit and explicit

// console.log("5" * 3); // string to number
// console.log(1 + "1"); // number to string
// console.log(true + 1); // boolean to bumber
// implicit

// const variable1 = "100";
// console.log(typeof Number(variable1)); // string to number

// const variable2 = false;
// console.log(Number(variable2)); // number to boolean

// const variable3 = "ertyfguhi";
// console.log(Number(variable3)); // NaN

// // console.log(NaN == NaN);

// const variable4 = true;
// console.log(Number(variable4)); // strings & boolean
// console.log(parseInt(variable4)); // only strings & float
// parseInt()

// const string1 = 1;
// console.log(String(string1)); // number to string

// const string2 = true;
// console.log(String(string2)); // boolean to string

// const string3 = [2, 4, 7, 9];
// console.log(String(string3)); // array to string

// const string = "2.6";
// console.log(parseFloat(string)); // string to float(number)

// const variable = NaN;
// console.log(Boolean(variable)); // boolean conversion

// truthy values - non zero integer, non - empty string, [], {}
// falsy values - 0, "", undefined, null, false, NaN

// if ("") {
//   console.log("truthy value");
// } else {
//   console.log("falsy value");
// }

// Rounding --

// const decimals = 5.456789;

// console.log(parseInt(decimals));
// console.log(Number(decimals.toFixed(3)));

// console.log(Math.ceil(decimals));
// console.log(Math.floor(decimals));
// console.log(Math.round(decimals));

// const otp = Math.floor(Math.random() * 1000000);
// console.log(otp);
// continue, break

// for (let i = 0; i < 10; i++) {
//   if (i === 1) {
//     continue;
//   }

//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

//outer loop
// for (let i = 0; i < 10; i++) {
//   //inner loop
//   for (let j = 0; j < 10; j++) {
//     if (j === 3) {
//       break;
//     }
//     console.log(i, j);
//   }
// }

// Objects:

// const userObj1 = {
//   name: "Gowrav",
//   age: 24,
//   "college name": "JNTUK",
//   2000: "Number key",
//   undefined: "undefined key",
//   [2]: "Array Key",
// };

// CRUD -- retreival, flexibilty, scalble

// Creation - POST
// userObj1.branch = "ECE";
// console.log(userObj1);

// Read - GET
// Dot , Square
// console.log(userObj1); // dot notation
// console.log(userObj1["college name"]); // square notation
// console.log(userObj1[2000]); // square notation
// console.log(userObj1[[2]]); // square notation

//Update
// userObj1.branch = "ECE"; // Creation
// console.log(userObj1, "before");

// userObj1.branch = "CSE"; // Updation
// console.log(userObj1, "after");

// Delete
// delete userObj1.undefined;
// console.log(userObj1);

// array of object
// nested objects
// object of arrays

// -------------------------------------------------28.11.2024---------------------------------------------------- //

// const nestedObj = {
//   key1: {
//     innerkey: {
//       name: "Career Sure Academy",
//     },
//   },
//   key2: {
//     innerkey: {
//       location: "KPHB",
//     },
//     dummy: "dummy",
//   },
// };

// console.log(nestedObj.key1.innerkey.name);
// const student = {
//   name: "Guru Charan",
//   age: 24,
//   college: "",
//   branch: "",
// };

// const students = [
//   {
//     name: "Student1",
//     age: 24,
//     college: "Colleg1",
//     branch: "Branch1",
//   },
//   {
//     name: "Student2",
//     age: 24,
//     college: "Colleg2",
//     branch: "Branch2",
//   },
//   {
//     name: "Student3",
//     age: 24,
//     college: "Colleg3",
//     branch: "Branch3",
//   },
//   {
//     name: "Student4",
//     age: 24,
//     college: "Colleg4",
//     branch: "Branch4",
//   },
//   {
//     name: "Student5",
//     age: 24,
//     college: "Colleg5",
//     branch: "Branch5",
//   },
// ];

// for (let student of students) {
//   console.log(student);
// }

// console.log(students[2].college);

// const obj = {
//   array1: [],
//   array2: []
// }
// if (console.log(true || false) === undefined) {
//   console.log("Check");
// }
// console.log(undefined && false);

// const student = {
//   name: "Guru Charan",
//   age: 24,
//   college: "College",
//   branch: "CSE",
//   // age: 30,
// };

// // console.log(student.age);

// // const dummy = student; // ---> Call by reference
// const dummy = { ...student, name: " kISHAN" }; // shallow copy ---> Spread --> reference wont be copied
// // entirely new obj irrespective of org obj
// // copy -- reference will be copied
// student.age = 50;
// console.log(dummy);

// const myArr = [1, 3, 5, 6];
// // const dummy = myArr; // call by reference
// const dummy = [...myArr]; // separate reference
// dummy.push("Added");
// console.log(myArr);

// let a = true;
// let dummy = a; // call by value -->
// a = false;
// console.log(dummy);

// All primitive datatypes call by value
// All non-primitive data types call by reference

// destructuring:

// const [a, b] = [1, 2];
// console.log(a, b);

// const student = {
//   name: "Guru Charan",
//   age: 24,
//   college: "College",
//   branch: "CSE",
//   // age: 30,
// };

// template literals
// console.log(
//   "Hi My name is " +
//     name +
//     " " +
//     "My age is " +
//     age +
//     " " +
//     "I am from " +
//     college +
//     " college " +
//     branch +
//     " Branch"
// );
// const { name, college, age, branch } = student;

// console.log(
//   `Hi My name is ${name}. My age is ${age}. I am from ${college} college, ${branch} branch`
// );
// backtick

// const arr = [
//   [1, 2, 3, 5],
//   [4, 5, 6, 5],
//   [7, 8, 9, 6],
// ];

// nested array - martix  - 2D array

// const rows = arr.length;
// const colums = arr[0].length;

// let sum = 0;
// for (let i = 0; i < rows; i++) {
//   // i =0 ---> j = 0, 1, 2 , 3
//   // i = 1 --> j =0 , 1, 2 ,3
//   for (let j = 0; j < colums; j++) {
//     // sum += arr[i][j];
//     console.log(arr[i][j]);
//   }
// }

// console.log(sum);

// -------------------------------------------------29.11.2024---------------------------------------------------- //

// function addValuesInArray(x, y, ...rest) {
//   let sum = x + y;

//   console.log("This is Rest", rest);
//   for (let i = 0; i < rest.length; i++) {
//     sum += rest[i];
//   }

//   return sum;
//   // return sum;
//   // console.log("After return");
// } // function declaration

// // rest operator - ...
// console.log(addValuesInArray(2, 7, 6, 7, 8, 9, 5, 7, 8, 9)); // variable no of arguments
// console.log(addValuesInArray(2, 7, 6, 7, 8, 9)); // variable no of arguments
// console.log(addValuesInArray(2, 7)); // variable no of arguments

// function addValues(x, y) {
//   return x + y;
// }
// console.log(addValues(2, 3));

// functions:
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Functions

// const a = 40; // global scope

// function addition() {
//   const a = 10; // function scope
//   console.log("Inside function Scope", a);
// }

// addition();

// const a = 20;
// if (true) {
//   const a = 40; // block scope
//   console.log("Inside Block scope:", a);
// }

// console.log("Global scope:", a);

// const obj = {
//   name: "Aditya",
//   add: function (x, y) {
//     return x + y;
//   }, // methods --- Functions in an objects
// };
// console.log(obj.add(2, 3));
// const myArr = [4, 5];
// console.log(typeof myArr);
// console.log(Array.prototype);

// const exp = function (x, y) {
//   return x + y;
// };
// // f expression
// console.log(exp(4, 8));

// const arrow = (x, y) => x + y;

// console.log(arrow(4, 6));

// let, const, var

// initialization
// re-declaration
// re-assignment

// let x;
// console.log(x);
// x = 43;
// x = 60;
// x = "uyhtg";
// console.log(x);
// let - declaration , late initialization, re-assignable, NO re-declaration, block-scoepd

// const y = 70;
// const y = 100
// const - declartion along with initialization, NO re-assignment, NO re-declaration, block-scoped

// var z;
// console.log("Var", z);
// z = 50;
// z = 70;
// z = "ujhytggfre";
// var z = 100;
// var z = 1000;
// console.log("Var", z);

// var - declaration , late initialization, re-assignable, re-declariton, function-scoped
// hoisting

// var a = 50;
// var b = 60;
// var c = 70;
// const d = 20;

// z = 50; // default var
// console.log(z);

// window.console.log(window); // this context

// -------------------------------------------------30.11.2024---------------------------------------------------- //

// console.log(addition(4, 60));

// function addition(x, y) {
//   console.log("Declaration");
//   return x + y;
// } /// hoisted - named functions

// const add2 = function (x, y) {
//   console.log("Expression");
//   return x + y;
// }; // anonymous func

// console.log(add2(4, 10)); // no hoisting

// function addition(x, y) {
//   if (true) {
//     var c = 40;
//   }
//   console.log(c);
//   return c;
// } /// hoisted

// addition(4, 7);

// IIFE

// (function () {
//   console.log("Immediately invoked function expression");
// })();

// const arrow = (x, y) => x + y;
// const arrow2 = (x, y) => {
//   return x + y;
// };

// const arrow3 = (x, y) => {
//   x = x + 100;
//   return x + y;
// };

// console.log(arrow3(6, 8));

// Callbacks functions -- functions which are arguments for another function

// const arrow = (x, y) => x + y;
// const arrow2 = (x, y) => {
//   return x + y;
// };

// const arrow3 = (arrow, arrow2) => {
//   return arrow + arrow2;
// };

// console.log(arrow3(arrow(1, 1), arrow2(1, 1)));

// map, filter , reduce ---> React -- Functional Programming --- HOF

// const arr = [4, 7, 9, 0];

// const callback = function (item) {
//   item++;
//   return item;
// };

// const newArr = arr.map((each) => each * 5); // decalrtative

// /// [4, 7, 9, 0]; // arr
// /// [20, 35, 45, 0] // newArr
// console.log(newArr, arr);

// const newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr2.push(arr[i] * 5);
// } // impoerative

// const arr = [4, 7, 9, 0];

// const callback = function (item) {
//   return item % 2 === 0;
// };
// const filteredArr = arr.filter(item => item % 2 === 0);

// // [4,7,9,0]
// // [4,0]

// console.log(filteredArr);

// const arr = [4, 7, 9, 1];

// // const finalValue = arr.reduce((acc, each) => each * acc, 1);

// // console.log(finalValue);

// arr.sort((a, b) => a - b);

// console.log(arr);

// -------------------------------------------------03.12.2024---------------------------------------------------- //

// Terenary operators, Objects methods , problems

// const age = 18;

// if (age >= 18) {
//   console.log("Eligible");
// } else {
//   console.log("Not eligible");
// }
// condition ? //if block : //else block

// const answer = age >= 18 ? "Eligible" : "Not Eligible";
// console.log(answer);

// const obj = {
//   name: "Career Sure Academy",
//   course: "MERN",
//   students: 9,
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// Max or min
// const arr = [6, 8, 2000, -2, 400, 2, 100, 1, -400];

// let max = arr[0]; //  6, 8
// let min = arr[0]; //  6, 8

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log(max, "Max number");
// console.log(min, "Min number");

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// function findPrime(n) {
//   for (let i = 2; i < Math.sqrt(n); i++) {
//     if (n % i == 0) {
//       return "Composite";
//     }
//   }

//   return "Prime";
// }

// console.log(findPrime(37)); // 37 % 1 === 0 , 37 % 37 === 0
// console.log(findPrime(2));
// console.log(findPrime(6));
// 2* 18, 18*2

// fibonacci series
// 0,1,1,2,3,5,8,13,21,34,55

// function fibonacci(n) {
//   if (n === 1) {
//     return [0];
//   }

//   const fib = [0, 1]; // 2 - 0th, 1st

//   for (i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2]; //fib[1] + fib[0]
//   }

//   return fib;
// }

// function recurseFib(n) {
//   if (n <= 1) {
//     return n;
//   }

//   return recurseFib(n - 1) + recurseFib(n - 2);
// }

// console.log(fibonacci(11));
// console.log(recurseFib(3));

// recursion

// 3! = 3*2*1
//5! = 120

// const n = 4;

// let fact = 1;
// for (let i = 2; i <= n; i++) {
//   fact *= i;
// }

// console.log(fact);

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(3));

// const myObj = { name: "Emma" };
// function addProperty(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

// console.log(addProperty(myObj, "job", "dev"));

// function removeDuplicates(arr) {
//   const dummy = []; // adding unique elements

//   for (let i = 0; i < arr.length; i++) {
//     if (!dummy.includes(arr[i])) {
//       dummy.push(arr[i]); // if dummy don't have the value
//     }
//   }
//   return dummy;
// }

// //3,7 ---> dummy.inclides(3) ---> false --> !false ---> true -->>
// // dummy --- [3,7]
// //7 ---> dummy.inclides(7) ---> true --> !true ---> false -->>

// console.log(
//   removeDuplicates([3, 7, 7, 9, 3, 7, 9, 0, 3, 2, 6, 7, 5, 6, 0, 2, 8])
// );

// finding anagrams:

// const str1 = "tom marvolo riddle";
// const str2 = "i am lord voldemort";

// const sortedString1 = str1.split("").sort().join("").trim(); // nlogn , o(n)
// const sortedString2 = str2.split("").sort().join("").trim(); // ascII

// console.log(sortedString1 === sortedString2);

// function isAnagram(str1, str2) {
//   const f1 = {};
//   const f2 = {};

//   for (let char of str1) {
//     if (char == " ") {
//       continue;
//     }
//     if (f1[char]) {
//       // f1["m"]
//       // char frequency already exist
//       f1[char] = f1[char] + 1;
//     } else {
//       f1[char] = 1;
//     }
//   }

//   for (let char of str2) {
//     if (char == " ") {
//       continue;
//     }
//     if (f2[char]) {
//       // f1["m"]
//       // char frequency already exist
//       f2[char] = f2[char] + 1;
//     } else {
//       f2[char] = 1;
//     }
//   }

//   for (let key in f1) {
//     if (f1[key] !== f2[key]) {
//       return false;
//     }
//   }

//   return true;
// }
// console.log(isAnagram(str1.toLowerCase(), str2.toLowerCase()));

// DOM - Document Object Model

// const h1El = document.querySelectorAll(".heading-class")[0];

// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.querySelector
// document.querySelectorAll

// h1El.innerText = "New Content"; // HTML Manipulate
// h1El.style.backgroundColor = "green"; // CSS manipulate
// console.log(h1El);

// // window.document.body.children[1].textContent = "Our Foods";
// // console.log(window.document.body.children[1]);

// const divEl = document.getElementById("div");

// divEl.innerHTML = `
// <h1> Hello </h1>
// <button> Submit</button>`;
// console.log(divEl);

// const divEl = document.getElementById("div");

// const newHeadingEl = document.createElement("p");
// newHeadingEl.textContent = "JS Element";

// divEl.appendChild(newHeadingEl);

// // Event, Event listeners

// console.log(divEl);

// divEl.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log("Clicked");
// });

// const inputEl = document.getElementById("input");

// inputEl.addEventListener("keydown", (event) => {
//   console.log(event.target.value);
//   console.log("Input element changed");
// });

// form in JS
// Dynamical cards

// Forms

const formEl = document.getElementById("form");

// getElementById
// getElementByClassName
// getElementByTagName
// querySelectorAll
// querySelector -- "#", ".", "h1"

const userData = JSON.parse(localStorage.getItem("user")) || []; // array of objects

formEl.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.querySelectorAll("input");

  const obj = {}; // single user data

  for (let items of input) {
    obj[items.name] = items.value;
  }
  userData.push(obj);
  localStorage.setItem("user", JSON.stringify(userData));
  displayCards(userData);
  //code
});

const cardsDiv = document.getElementById("cards-div");

function displayCards(userData) {
  cardsDiv.innerHTML = "";
  for (let items of userData) {
    const innerData = `
<div class="border border-secondary d-flex rounded m-3">
          <img
            src=${items.image}
            class="img"
          />
          <div class="p-1 data-container">
            <h1 class="main-heading m-0">${items.name}</h1>
            <p class="paragraph m-0">${items.age}</p>
            <p class="paragraph">${items.job}</p>
          </div>
        </div>
    `;

    cardsDiv.innerHTML += innerData;
  }
}

displayCards(userData);

// const nameEl = document.getElementById("name");
// nameEl.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

//class
// OOPS
// Adavcned

//storage mecahnisms: Client side storage mecahnism
//1. localStorage
//2. Cookies
//3. Session storage

//JSON - JS object notation - Obj - Key - string

// let obj = {
//   name: "Aditya",
// };

// let jsonObj = {
//   name: "Aditya",
// };

// console.log(typeof jsonObj);

// localStorage.setItem("x", JSON.stringify(80)); // Create
// localStorage.setItem("y", 10);

// console.log(JSON.parse(localStorage.getItem("x"))); // Read

// function add(x, y = 100) {
//   return x + y;
// }

// console.log(add(4));

// console.log(null + null + "rtbfv"); // implicit

// console.log(NaN == NaN);

// learn_depth,

// Class -  ECSAScript 6

// const obj = {
//   name: "rtbvfc",
//   age: 30,
//   greet: function () {
//     console.log("Hello, Good morning");
//   },
// };

// console.log(obj.greet());

//this ---

// add();
// const a = 10;

// var name = "Sai Kiran";
// function add() {
//   console.log("Called");
// }

// console.log(window);

// console.log(this); // global scope ---> window

// // let obj1 = { name: "Alice" }; // call by reference
// // let obj2 = obj1;

// // console.log(obj1 === obj2);

// function checkThis() {
//   console.log(this.add()); // functional scope ---> window
// }

// checkThis();

// var name = "Sai Kiran"; // window

// const obj = {
//   name: "Career Sure Academy",
//   greet:  () => {
//     console.log(this.name);
//   },
// };

// // arrow func in objects --> this ---> window
// // other func in objects --> this ---> object itself
// console.log(obj.greet());

// Objects
// 1. Object literal

// const obj = {
//   name: "Alice",
// };

// 2. Object in-built

// const obj2 = new Object();
// obj2.name = "Alice";
// console.log(obj2);

// 3. Constructor functions:

// function Person(name) {
//   this.name = name;
//   this.greet = function () {
//     console.log(`Nice to meet you. I am ${this.name}`);
//   };
// }

// const person = new Person("Alice"); // instantiation
// const person2 = new Person("Aditya");
// const person3 = new Person("Nikhil");
// const person4 = new Person("Akhil");

// console.log(person3.greet());

// 4. Classes: -- OOPS

// class Car {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }

//   horn() {
//     return "Honk honk...";
//   }

//   lowFuel() {
//     return "Need fuel";
//   }
// }

// const car1 = new Car("Audi", "red"); // intance of object
// // this in classes ---> instance of the object
// const car2 = new Car("Benz", "black"); // intance of object
// const car3 = new Car("BMW", "white"); // intance of object

// console.log(car3);

// abstraction
// inheritance
// encapsualtion
// polymorphism
// classes

// class Bank {
//   #balance; // privarte variable
//   constructor(name, bankName, balance) {
//     this.accountHolder = name;
//     this.bankName = bankName;
//     this.#balance = balance;
//   }

//   changeName(newName) {
//     this.accountHolder = newName;
//   }

//   addBalance(amount) {
//     this.#balance += amount;
//     console.log(`Rs. ${amount} has been credited to your account`);
//   }

//   removeBalance(amount) {
//     this.#balance -= amount;
//     console.log(`Rs. ${amount} has been debited from your account`);
//   }

//   getBalance() {
//     console.log(`Your Balance is ${this.#balance}`);
//   }
// }

// const account1 = new Bank("Aditya", "ICICI", 1000);

// account1.changeName("New Name");
// account1.addBalance(10000);
// account1.getBalance();
// account1.addBalance(100000);
// account1.getBalance();

// account1.removeBalance(100000);
// account1.getBalance();

// class Animal {
//   constructor(color, type) {
//     this.type = type;
//     this.color = color;
//   }
//   move() {
//     console.log("Animal is moving");
//   }
// }

// class Lion extends Animal {
//   constructor(color, type, runSpeed) {
//     super(color, type);
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     console.log(`${this.type} is running with a speed of ${this.runSpeed}kmph`);
//   }
// }

// class Fish extends Animal {
//   constructor(color, type, swimSpeed) {
//     super(color, type);
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     console.log(
//       `${this.type} is swimming with a speed of ${this.swimSpeed}kmph`
//     );
//   }
// }

// class Eagle extends Animal {
//   constructor(color, type, flySpeed) {
//     super(color, type);
//     this.flySpeed = flySpeed;
//   }

//   fly() {
//     console.log(`${this.type} is flying with a speed of ${this.flySpeed}kmph`);
//   }
// }

// const lion1 = new Lion("Gold", "Lion", 30);
// const fish1 = new Fish("Black", "Fish", 40);
// const eagle = new Eagle("Brown", "Bird", 50);

// console.log(lion1.run());

// console.log(fish1.move());
// console.log(fish1.swim());

// console.log(eagle.move());
// console.log(eagle.fly());

// prototypes:

// const arr = [6, 8, 9];

// console.log(arr);
// // console.log(arr.__proto__); // Array.prototype
// // console.log(Array.prototype);

// // console.log(arr.__proto__.__proto__); // Object.prototyp
// // console.log(Object.prototype);

// function fun() {
//   ///
// }

// console.log(fun.__proto__); ///Function.protype
// console.log(Object.getPrototypeOf(fun), "Answer");
// console.log(Function.prototype.__proto__);

// // console.log(fun.__proto__.__proto__); // Object.prototype
// // console.log(Object.prototype);

// const obj1 = {
//   name: "Aditya",
//   city: "Vijayawada",
// };

// console.log(obj1.__proto__);
// console.log(Object.getPrototypeOf(obj1));

// const obj2 = {};

// console.log(obj2.__proto__);

// obj2.__proto__ = obj1;

// console.log(obj2.__proto__);

// console.log(obj2.name);

// // prototpy inheritance

// Async:

// console.log(1);

// function random() {
//   // 5 mins operation - async task - API calls

//   console.log("Random");
// }
// random();

// // synchrous tasks - blocking
// // asynchrous programming - non-blocking
// console.log(2);

// let count = 0;
// console.log("Before");

// const timerID = setInterval(() => {
//   console.log(count++);
//   if (count === 3) {
//     clearInterval(timerID);
//   }
// }, 5000); // event loop -async task
// console.log("Hello");

// console.log(timerID, "timer");

// console.log("Before");
// setTimeout(() => {
//   console.log("Set time out");
// }, 5000);

// console.log("After");

// let pizza;

// function orderPizza(callback) {
//   // 5 mins
//   console.log("Preparing pizza");

//   callback();
// }

// function preparePizza() {
//   pizza = "🍕";
// }
// orderPizza(preparePizza);
// console.log("Watch TV");
// console.log("Coding");
// console.log(`Eat ${pizza}`);

// function first(callback) {
//   //execute all the code and tghen call the callback
//   console.log("first");
//   callback();
// }

// function second(callback) {
//   console.log("second");
//   callback();
// }

// function third() {
//   console.log("third");
// }

// first(() => second(() => third()));

// callbacks ------ callback hell --- nested callbacks
// Promises ---> then, catch
// Async/await

// function promiseFunc() {
//   return;
// }

// Promises --- 3 states
// 1. Fulfilled
//2. Rejected
//3. Pending

// const p = new Promise((resolve, reject) => {
//   // API call

//   setTimeout(() => {
//     resolve({ user: "Aditya" });
//     // reject("Server problem");
//   }, 2000);
//   // if (1 + 1 == 2) {
//   //   resolve("Success");
//   // }
// });

// function onSucesssData(successMessage) {
//   setTimeout(() => {
//     successMessage.age = 24;
//   }, 2000);

//   return successMessage;
// }

// function secondCall(successMessage) {
//   console.log(successMessage, "second");

//   return "Third";
// }

// function onError(errorMessage) {
//   console.log(errorMessage);
// }
// p.then(onSucesssData) // async
//   .then(secondCall)
//   .then((x) => console.log(x, "third chain"))
//   .catch(onError);

//Promise chaining

// fetch API --->

// GET, POST, PUT, DELETE

// const data = fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((response) => console.log(response, "DATA"))
//   .catch((error) => console.log(error, "Error"));

// async/await

const asyncFunc = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products"); // GET
    console.log(data, "first data");
    const response = await data.json();
    console.log(response);
  } catch (error) {
    console.log(error, "Error");
  } finally {
    console.log("Task completed");
  }
};

asyncFunc();

// Loader
// JS async/await ---> render data --- > E-commerce
// Promise.all  vs Promise.race()
// event loop
