// Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

// If the first character in string  is in the set , then return A.
// If the first character in string  is in the set , then return B.
// If the first character in string  is in the set , then return C.
// If the first character in string  is in the set , then return D.


function getLetter(s) {
  let letter;
  switch (s[0]) {
    case ("a" || "e" || "i" || "u"):
      return "A"
      break;
    case ("b"|| "c" || "d" || "f" || "g"):
      return "B"
      break;
    default:
      "return please enter a string"
      break;
  }
}

console.log(getLetter("adfgt"));//expect A  
// console.log(getLetter("bope"))
