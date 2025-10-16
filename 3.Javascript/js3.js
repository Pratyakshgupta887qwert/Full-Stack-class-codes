// strings

let aa= "hello my name is pratyaksh is name is";
let bb="om";

b= a.charAt(2);
console.log(b);

c=a.charCodeAt(2);
console.log(c);

// d=at(3);
// console.log(d);

e=aa.concat(bb);
console.log(e);

console.log(aa.concat(bb))

//include(search)
// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// console.log(result); // true
console.log(aa.includes(bb));

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");
// console.log(result); // Output: 13
console.log(aa.indexOf(bb));

// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("planet");
// console.log(result); // Output: 36
console.log(aa.lastIndexOf('name'));

/*

match(regex)
matchAll(regex)
repeat(count)


*/

console.log(aa.replace('hello','HELLO'));

console.log(aa.replaceAll('is','ISs'));

/*
search(regex)

*/

console.log(aa.slice(2,5));

/*
split(separator , limit)
substring(start,end)

 */

console.log(aa.toLocaleLowerCase())

console.log(bb.toUpperCase())


let rr = " ll heoxn "
/*
trim()
trimStart()
trimEnd()

 */
console.log(rr.trim())
console.log(rr.trimStart())
console.log(rr.trimEnd())

/*
padStart(targetLength, padString)
padEnd(targetLength, padString)
 */

let yy="jjjhlak"
console.log(yy.valueOf())

/*

valueOf()
localeCompare(compareString, locales ,options)
startsWith(searchString , position)
endsWith(searchString , length)
normalize(form)
codePointAt(pos)
fromCharCode(num1,.....,numN)
fromCodePoint(num1,.....,numN)
 */






// strings

let aa = "hello my name is pratyaksh name";
let bb = "om";

// ✅ Corrected variable names
let b = aa.charAt(2);
console.log(b);

let c = aa.charCodeAt(2);
console.log(c);

// ✅ Correct usage of at()
let d = aa.at(3);
console.log(d);

// ✅ Concatenation
let e = aa.concat(bb);
console.log(e);

console.log(aa.concat(bb));

// ✅ includes()
console.log(aa.includes(bb)); // false because "om" is not in aa

// ✅ indexOf()
console.log(aa.indexOf(bb)); // -1 because "om" not found

// ✅ lastIndexOf()
console.log(aa.lastIndexOf("name")); // position of last "name"

// ✅ replace()
console.log(aa.replace("hello", "HELLO"));





// ALL THE FUNCTIONS AND METHORDS OF THE STRING

// =================== STRING METHODS EXAMPLES ===================

let a = "hello";
let aa = "hello my name is pratyaksh is name is";
let bb = "om";

// charAt()
console.log(a.charAt(1)); // e

// charCodeAt()
console.log(a.charCodeAt(1)); // 101

// concat()
console.log(a.concat(" ", bb)); // hello om

// includes()
console.log(aa.includes("name")); // true

// indexOf()
console.log(aa.indexOf("name")); // first index of 'name'

// lastIndexOf()
console.log(aa.lastIndexOf("name")); // last index of 'name'

// match()
let line = "rain rain go away";
console.log(line.match(/rain/g)); // [ 'rain', 'rain' ]

// matchAll()
for (let match of line.matchAll(/rain/g)) {
    console.log(match[0]); // rain rain
}

// repeat()
console.log("ha".repeat(3)); // hahaha

// replace()
console.log("hello world".replace("world", "bro")); // hello bro

// replaceAll()
console.log("is is is".replaceAll("is", "was")); // was was was

// search()
console.log("Hello World".search(/W/)); // 6

// slice()
console.log("Hello".slice(1, 4)); // ell

// split()
console.log("a,b,c".split(",")); // [ 'a', 'b', 'c' ]

// substring()
console.log("abcdef".substring(2, 5)); // cde

// toLowerCase() and toUpperCase()
console.log("HELLO".toLowerCase()); // hello
console.log("hello".toUpperCase()); // HELLO

// trim(), trimStart(), trimEnd()
let messy = "   hi there   ";
console.log(messy.trim());      // hi there
console.log(messy.trimStart()); // hi there
console.log(messy.trimEnd());   //    hi there

// padStart() and padEnd()
console.log("5".padStart(3, "0")); // 005
console.log("5".padEnd(3, "0"));   // 500

// valueOf()
let s = new String("yo");
console.log(s.valueOf()); // yo

// localeCompare()
console.log("apple".localeCompare("banana")); // -1
console.log("banana".localeCompare("apple")); // 1
console.log("apple".localeCompare("apple"));  // 0

// startsWith() and endsWith()
console.log("JavaScript".startsWith("Java"));   // true
console.log("JavaScript".endsWith("Script"));   // true

// normalize()
console.log("\u004F\u0308".normalize("NFC")); // Ö

// codePointAt()
console.log("A".codePointAt(0)); // 65

// fromCharCode()
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Hello

// fromCodePoint()
console.log(String.fromCodePoint(128512)); // 😀

// =================== END OF STRING METHODS ===================

