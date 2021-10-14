// * Complete the 'camelcase' function below.
// *
// * The function is expected to return an INTEGER.
// * The function accepts STRING s as parameter.
// */

//saveChangesInTheEditor
//expect 5 words 
//identify words that start with a captial letter
//write a conditional that identifies characters with a capital letter and push those words to an array 
//might be useful to find the string length to make sure there is actually a string

function camelcase(s) {
  // Write your code here
  //use a loop to iterate through a string
  let count = 1;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === s[i].toUpperCase()){;
    count++;
    }
  }
  return count
}
console.log(camelcase("saveChangesInTheEditor"));
