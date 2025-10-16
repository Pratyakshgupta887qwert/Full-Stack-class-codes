// 1 to 10 numbers from 1 to 10
for(let i=0;i<=10;i++){
    console.log(i);
}


// getting the 1 to 10 even numbers with out using airthemtic operator
for (let i = 1; i <= 10; i = i + 1) {
    console.log(i >> 0 << 1);
}


// IN operator
// The in operator in JavaScript is a boolean operator used to determine if a specified property exists within an object or its prototype chain. It returns true if the property is found, and false otherwise

const person = { name: "Alice", age: 30 };
console.log("name" in person); // true
console.log("job" in person);  // false




// for-in and for -of
const arr = [100, 200, 300];

for (const x in arr) {
    console.log("in:", x); // gives index
}

for (const x of arr) {
    console.log("of:", x); // gives value
}