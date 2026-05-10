// Callbacks and Asynchronous Programming in Node.js
// This file demonstrates callback functions and setTimeout for handling asynchronous operations

// ==========================================
// Example 1: Callback Function Pattern
// ==========================================
// A callback is a function passed as an argument to another function
// // function main(cb) {
//     console.log("Operation 1 completed");
//     setTimeout(function () {
//         cb("Operation Completed");  // Execute callback after 2 seconds
//     }, 2000);
//     console.log("Operation 2 completed");
// }
//
// function callback_fun(result) {
//     console.log("Result: " + result);
// }
//
// main(callback_fun);  // Pass callback function as argument

// ==========================================
// Example 2: setTimeout with Named Function
// ==========================================
// Delays execution of a function by specified milliseconds
// const massage = function () {
//   console.log("Print after 3 seconds");
// };
// setTimeout(massage, 3000);  // Waits 3000ms before executing

// ==========================================
// Example 3: setTimeout with Anonymous Functions
// ==========================================
// Using anonymous functions directly in setTimeout
// setTimeout(function () {
//   console.log(".....");  // Anonymous function
// }, 1000);  // Executes after 1 second
//
// setTimeout(() => {
//   console.log("............");  // Arrow function
// }, 2000);  // Executes after 2 seconds

// ==========================================
// Key Concepts:
// - Callbacks allow handling results after async operations
// - setTimeout schedules code execution after a delay
// - Order of execution is different from code order
// ==========================================

// // set interval function
// setInterval(() => {
//   console.log("Hello");
// }, 1000);

