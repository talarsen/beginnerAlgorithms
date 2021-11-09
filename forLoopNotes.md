For loops can be used to interate over strings.

for demonstration purposes...
const str = 'banana';
const process = (character) => {
// ...
};
Method 1

---

A simple for loop...

const str = "apple"

//for loop and bracket notation
for(let i = 0; i< str.length; i++> {
process(str[i])
})

OR

// charAt()
for (let i = 0; i < str.length; i++) {
process(str.charAt(i));
}

## Method 2

A for of loop...

-easier to use if the index in the loop body is not needed

const str = "apple"
for(char of string) {
process(c)
}

## Method 3

A forEach loop...

//convert string to array
[...str]

[...str].forEach(process)
