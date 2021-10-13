// An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are mutable.

//To add items from an array...
//to the beginning use unshift()
//to the end use push()

// To remove items from array...
//at end of the array use pop()
//at beginning of the array shift()

//To edit items in the middle of the array
//splice() can take up to 3 parameters
//splice returns a new array and MUTATES the original array
//splice(what INDEX to start removing, how many elements to remove)

//you can use the third parameter, comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

/*****Slice*****/
//slice
