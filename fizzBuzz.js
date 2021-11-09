// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.

//declare function
let fizzBuzz = (n) => {
  //declare string array to push the new strings
  let stringArray = []
   for(let i = 1; i <= n; i++){
  //conditions to check if there is a fizz, buzz or fizzbuzz
  //if index in array is divisible by 3 or 5 push "FizzBuzz"
    if((i % 3 === 0) && (i % 5 === 0) ){
      stringArray.push("FizzBuzz")
    } else if(i % 3 === 0){
      stringArray.push("Fizz")
    } else if (i % 5 === 0) {
      stringArray.push("Buzz")
    } else {
      stringArray.push(i.toString());
    }
   }
    return stringArray
  }
 


console.log(fizzBuzz(35));


function largestWOrd(str) {
  //take out punc for string
  let strNoPunc = str.replace()
  //split the string to get indivdual words
  //create 2 variables to store the length of the word and the word itself
  //each time the length is greater than stored length, replace the lonest word
  //find the length of each string
  //look a the length and return the longest string
  //return the longest word in the string(str)
}