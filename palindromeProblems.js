//A palindrome is a word that read the same forwards and backwards
//that means a palindrome has to have the same first and last letter

//clean a string to check for palindromes.

// const clean = (str) => {
//   str.toLowerCase().replace(/[\W_]/g, '')
// }


const isPalindrome = (str) => {
  let cleanStr = str.toLowerCase().replace(/[\W_]/g, '')
  console.log(cleanStr)
  const charArray = cleanStr.split("");
  for(c of charArray) {
    if(c !== charArray.pop()){
      return false;
    }
  }
    return true;
}

console.log(isPalindrome("Dragon"))
//order of operations for palindromes
//1. convert string to array array.split("")
//2. use a for of loop to iterate through the characters
//3. For each element, we remove the last element of the array using pop() and then we compare the current element with that.
// If any of these does not equal, it’s not a palindrome,  we break out and return false.

