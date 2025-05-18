// Till date, we have been doing synchronous, meaning the code is running top to bottom. 

// 🔵 Sync in JS

// 🔸 Synchronous
// Synchronous means the code runs in a particular sequence of instructions
// given in the program. Each instruction waits for the previous instruction
// to complete its execution.

// 🔸 Asynchronous
// Due to synchronous programming, sometimes important instructions get blocked
// due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows the next instructions to execute immediately
// and doesn't block the flow.




console.log("one");   // (1) Executes immediately
console.log("two");   // (2) Executes immediately

// setTimeout schedules the function to run after 4000ms (4 seconds),
// but DOES NOT block the rest of the code.
setTimeout(() => {
  console.log("hello"); // (5) Executes after 4 seconds
}, 4000); // timeout

console.log("three"); // (3) Executes immediately
console.log("four");  // (4) Executes immediately

// 🔸 NOTE:
// Even though setTimeout is written before "three" and "four",
// JavaScript doesn't wait. It schedules the "hello" log to run after 4 seconds
// and immediately moves on to execute the rest of the code.
// This is because setTimeout is asynchronous and handled by the event loop.

