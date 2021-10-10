//factorialize

/*** Strategy ***/

// a factorial is a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n:

//need a loop to increment through all of the integers below and including n.

//need a loop that will have an index so I can use the index to multiply the result to... result * i = result

const factorialize = (num) => {
  //declare a variable called result to store the "new" answer each time the loop increments and a new result is generated
  //the result must start with 1 and not 0 otherwise the result will always be 0. 
  let result = 1;

  //create a for loop to increment through all the nums below num and num use the index as a multiplier
  for(let i = 1; i <= num; i++){
    result = result * i;
  }
  return result;
}

console.log(factorialize(12));