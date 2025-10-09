console.log("hello world")
// for simple printing
var num=2
console.log(num)

console.log(2+2)

console.log(2>1)

// if you are not allowed to use console.log() we can use other things to display
// console.warn
// console.info
// error

console.warn('a');
console.info("kk");
error("kkk")

// we alos use table for displaying the in table



// variable  : var , let , const
//DRAWBACKS FOR VAR : var works globally and let , const works locally
//                    var can be reintiallize anytime and let can not reintiallize.



// data types : primitive and non-primitive
// primitive : which are build in
// non primitive : which are created with the combination of primitive data types

// functions is a data type : non primitive data type

console.log(typeof(2))
console.log(typeof(2.1))
console.log(typeof('2.13'))

// differnce between null and undefined
//undefined:
// Meaning: Indicates that a variable has been declared but has not yet been assigned a value. It also represents the value of uninitialized object properties or the return value of functions that do not explicitly return anything.
// Origin: It is a primitive value automatically assigned by JavaScript in certain scenarios.
// Example:
// JavaScript
//
//     let myVariable; // myVariable is undefined
//     console.log(myVariable); // Output: undefined
//
//     const myObject = {};
//     console.log(myObject.nonExistentProperty); // Output: undefined
// null:
// Meaning: Represents an intentional absence of any object value. It signifies that a variable or property is explicitly set to have no value.
// Origin: It is a primitive value that must be explicitly assigned by a developer.
// Example:
// JavaScript
//
//     let myOtherVariable = null; // myOtherVariable is explicitly set to null
//     console.log(myOtherVariable); // Output: null
//
//     function findUser(id) {
//         // ... search logic ...
//         if (userNotFound) {
//             return null; // Explicitly returning null to indicate no user found
//         }
//         // ...
//     }


// big int

var y= BigInt(51236236959263030326);



// strings : can be difined in 4 ways ('' ,"" , `` , \)

var name = 'pratyaksh\'s'
console.log(name)

