/* Try, catch, finally */

try {
  console.log('Start of try runs');

  // This is a runtime error because "unicycle" is not defined
  // The moment this line is hit, control jumps to the catch block
  unicycle;

  // This line will never run because the error occurred above
  console.log('End of try runs -- never reached');

} catch (err) {
  // This block runs only if a runtime error happens inside try
  console.log('Error has occurred: ' + err);

} finally {
  // This block ALWAYS runs no matter what
  console.log('This is always run');
}

// This line runs after try/catch/finally is complete
console.log('...Then the execution continues');
