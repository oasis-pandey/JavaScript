// 'async' makes a function return a Promise
// 'await' pauses the function until the Promise resolves

// This async function simulates fetching data (e.g., from a server)
async function getData() {
    return new Promise((resolve, reject) => {
        // Simulate delay using setTimeout
        setTimeout(() => {
            resolve(455); // After 3.5 seconds, return the value 455
        }, 3500);
    });
}

// This async function runs the main program flow
async function main() {
    console.log("Loading modules");

    console.log("Do something else");

    console.log("Load data");

    // 'await' pauses execution until getData() finishes
    let data = await getData();

    console.log(data); // Logs the resolved value: 455

    console.log("process data");

    console.log("task 2");
}

// Start the program
main();
