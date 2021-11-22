const reverseArray = (array) => {
  if(!array){
    return "array is not valid";
  } 

  //create var to store newArray
  let newArray = array;
  let reverseArray = [];
  for(let i = newArray.length -1; i >= 0; i--){
   reverseArray.push(newArray[i]);
  }
  return reverseArray;
}
//reverseArray(["first", "second", "third", "fourth" ]);
// reverseArray(["1", "2", "3", "4" ]);
// console.log("expect array is not valid",reverseArray( NaN));
