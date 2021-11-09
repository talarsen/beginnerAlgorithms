// Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

// Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String

// Example.


// aab shortens to b in one operation: remove the adjacent a characters.


// Remove the two 'b' characters leaving 'aa'. Remove the two 'a' characters to leave ''. Return 'Empty String'.

function superReducedString(s) {
  // Write your code here
  let stringArray = s.split("")
  //iterate through array to find side by side matches
  for(let i = 0; i < stringArray.length; i++) {
    if(stringArray[i] === stringArray[i + 1]){
     stringArray.splice(i,2);
     i = -1;
    } else if( stringArray.length === 0) {
      return "empty string"
    }
  }
  return stringArray.join("")
}

console.log(superReducedString("aaabccddd"))//expect abd
