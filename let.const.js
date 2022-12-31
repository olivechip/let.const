// let and const Exercise
// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!

// ES2015 Global Constants
// /* Write an ES2015 Version */
const PI = 3.14;
PI = 42;

// Quiz
// What is the difference between var and let?
var is function scoped, can be reassigned and redeclared 
let is block scoped, can be reassigned but cannot be redeclared
// What is the difference between var and const?
var is function scoped, can be reassigned and redeclared 
const is block scoped, cannot be reassigned or redeclared
// What is the difference between let and const?
let is block scoped, can be reassigned but cannot be redeclared
const is block scoped, cannot be reassigned or redeclared
// What is hoisting?
when js automatically moves functions and declarations to the top of the file
var is declared at the top but not initialized until code runs
const and let are not hoisted but are declared and initialized as the code runs
