//pass in the string str
//need a wordLength variable to store the length(number) of the longest word
//split the string into an array of words
//create a conditional state to compare previous string with next string
//need for loop with index 




function findLongestWordLength(str) {
  //need a wordLength variable to store the length(number) of the longest word and set it equal to zero 
  let longestWordLength = 0;
  //split the string into an array being mindful of the separator having a space otherwise the string will be split into characters
  let stringArray = str.split(" ");

  //for loop
  for(let i = 0; i < stringArray.length; i++) {
  //   If strArray[i].length is greater than the word it is compared with... longestWordLength = stringArray[i].length; then longestWordLength takes this new value
    if(stringArray[i].length > longestWordLength ){
      longestWordLength = stringArray[i].length
    }
  }
  return longestWordLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));