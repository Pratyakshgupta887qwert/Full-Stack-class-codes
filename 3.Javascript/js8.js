// =================== ARRAY METHODS EXAMPLES ===================

let arr = [1, 2, 3, 4, 5];
let nums = [10, 20, 30];
let fruits = ["apple", "banana", "cherry"];

// ✅ length
console.log(arr.length); // 5

// ✅ at()
console.log(fruits.at(1)); // banana

// ✅ concat()
console.log(arr.concat(nums)); // [1, 2, 3, 4, 5, 10, 20, 30]

// ✅ copyWithin(target, start, end)
let copyArr = [1, 2, 3, 4, 5];
console.log(copyArr.copyWithin(0, 3, 5)); // [4, 5, 3, 4, 5]

// ✅ entries()
for (let [index, value] of fruits.entries()) {
    console.log(index, value);
}
// 0 apple
// 1 banana
// 2 cherry

// ✅ every()
console.log(arr.every(num => num < 10)); // true

// ✅ fill(value, start, end)
console.log(arr.fill(0, 2, 4)); // [1, 2, 0, 0, 5]

// ✅ filter()
console.log(arr.filter(num => num > 2)); // [3, 4, 5]

// ✅ find()
console.log(arr.find(num => num > 3)); // 4

// ✅ findIndex()
console.log(arr.findIndex(num => num > 3)); // 3

// ✅ flat()
let nested = [1, [2, [3, [4]]]];
console.log(nested.flat(2)); // [1, 2, 3, [4]]

// ✅ flatMap()
let doubled = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log(doubled); // [1, 2, 2, 4, 3, 6]

// ✅ forEach()
arr.forEach(num => console.log(num)); // 1 2 0 0 5

// ✅ from()
console.log(Array.from("hello")); // [ 'h', 'e', 'l', 'l', 'o' ]

// ✅ includes()
console.log(fruits.includes("banana")); // true

// ✅ indexOf()
console.log(fruits.indexOf("banana")); // 1

// ✅ lastIndexOf()
console.log(["a", "b", "a"].lastIndexOf("a")); // 2

// ✅ isArray()
console.log(Array.isArray(arr)); // true

// ✅ join()
console.log(fruits.join(" - ")); // apple - banana - cherry

// ✅ keys()
for (let key of fruits.keys()) {
    console.log(key); // 0 1 2
}

// ✅ map()
console.log(nums.map(x => x * 2)); // [20, 40, 60]

// ✅ pop()
let popArr = [1, 2, 3];
console.log(popArr.pop()); // 3
console.log(popArr); // [1, 2]

// ✅ push()
popArr.push(4);
console.log(popArr); // [1, 2, 4]

// ✅ reduce()
console.log(arr.reduce((sum, n) => sum + n, 0)); // adds all numbers

// ✅ reduceRight()
console.log(arr.reduceRight((acc, n) => acc - n)); // subtract from right

// ✅ reverse()
console.log(fruits.reverse()); // [ 'cherry', 'banana', 'apple' ]

// ✅ shift()
let shiftArr = [10, 20, 30];
console.log(shiftArr.shift()); // 10
console.log(shiftArr); // [20, 30]

// ✅ unshift()
shiftArr.unshift(5);
console.log(shiftArr); // [5, 20, 30]

// ✅ slice(start, end)
console.log(arr.slice(1, 4)); // [2, 0, 0]

// ✅ some()
console.log(arr.some(num => num === 5)); // true

// ✅ sort()
let sortArr = [3, 1, 4, 2];
console.log(sortArr.sort()); // [1, 2, 3, 4]

// ✅ splice(start, deleteCount, ...items)
let sp = [1, 2, 3, 4];
sp.splice(1, 2, 99, 100);
console.log(sp); // [1, 99, 100, 4]

// ✅ toString()
console.log(arr.toString()); // "1,2,0,0,5"

// ✅ values()
for (let value of fruits.values()) {
    console.log(value); // cherry banana apple
}

// ✅ findLast() & findLastIndex() (ES2023+)
let arr2 = [10, 20, 30, 40, 50];
console.log(arr2.findLast(x => x < 40)); // 30
console.log(arr2.findLastIndex(x => x < 40)); // 2

// ✅ toReversed(), toSorted(), toSpliced() (ES2023 immutables)
let numz = [5, 3, 1];
console.log(numz.toSorted()); // [1, 3, 5]
console.log(numz.toReversed()); // [1, 3, 5] reversed
console.log(numz.toSpliced(1, 1, 9)); // [5, 9, 1]

// ✅ with() (ES2023)
let newArr = [1, 2, 3];
console.log(newArr.with(1, 99)); // [1, 99, 3]

// =================== END OF ARRAY METHODS ===================
