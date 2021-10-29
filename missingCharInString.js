// Given a non-empty string and an int n, return a new string where the char at index n has been removed.
// The value of n will be a valid index of a char in the original string
// (i.e. n will be in the range 0..len(str)-1 inclusive).

const missing_char = (str, n) => {
  //convert string into an array and store in a new variable called  newArray
  let newArray = str.split("");
  //loop through array
  for(let i = 0; i < newArray.length; i++) {
    if(i === n){
      newArray.splice(i,1)
    }
  }
 return newArray.join("");
}
// console.log(missing_char("kitten", 1));
// //→ 'ktten'
console.log(missing_char("kitten", 0));
// //→ 'itten'
// console.log(missing_char("kitten", 4));
// //→ 'kittn'