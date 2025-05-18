
// // CALLBACK HELL


// // Define a function that simulates fetching data asynchronously
// // Accepts a dataId and a callback function (getNextData)
// function getData(dataId, getNextData) {
//   // Simulate a 2-second delay using setTimeout
//   setTimeout(() => {
//     console.log("data", dataId); // Log the current data ID

//     // If there's a next function to call, call it after this is done
//     if (getNextData) {
//       getNextData(); // Trigger the next step in the chain
//     }
//   }, 2000);
// }

// // Callback chain begins here
// // Each getData call is nested inside the previous one
// // This creates a sequence: data1 → data2 → data3 → data4
// // This pattern is called "callback hell" or "pyramid of doom"
// getData(1, () => {
//   console.log("getting data2 ....");

//   getData(2, () => {
//     console.log("getting data3 ....");

//     getData(3, () => {
//       console.log("getting data4 ....");

//       // Final call with no callback
//       getData(4);
//     });
//   });
// });

// TO SOLVE PROBLEMS OF CALLBACK HELL, we have PROMISES

