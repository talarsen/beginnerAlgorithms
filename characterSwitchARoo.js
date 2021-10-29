// Given a string, return a new string where the first and last chars have been exchanged.

front_back('code')//'eodc'
// front_back('a') → 'a'
// front_back('ab') → 'ba'

function front_back(str){
  if(str.length === 1){
    return str;
  }
  //takes the first index
  //let first = str.charAt(str.length-1)
  let first = str[0];//expect c
  //takes the last index
  //let last = str.charAt(str.length-1)
  let last= str[str.length-1];
  //takes whats in between
  let middle = str.slice(1,str.length-1 )
return `${last}${middle}${first}`;
// return last + middle + first;

}

console.log(front_back('code'))//'eodc'
// (front_back('a'))// → 'a'
// (front_back('ab'))// → 'ba'
