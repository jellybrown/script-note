'use strict';

// 2. Index position
const fruits = ['apple', 'banana'];

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// b.for of
for (let value of fruits) {
    console.log(value)
}

// c. forEach
fruits.forEach((fruits, index, array) => console.log("1. " + fruits, index, array))
fruits.forEach((fruits, index) => console.log("2. " + fruits, index))
fruits.forEach((fruit) => console.log("2. " + fruits))

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('grape')
console.log(fruits)

// pop: remove an item from the end
fruits.pop();
console.log(fruits)

// unshift: add an item to the benigging
fruits.unshift('lemon', 'melon')
console.log(fruits)

// shift: remove an item from the benigging
fruits.shift();
console.log(fruits)

// note! shift, unshift are slower than pop, push (권장x)
//splice: remove an item by inde position
fruits.push('watermelon', 'peach', 'strawberry')
console.log(fruits)
// fruits.splice(1); 1번째부터 끝까지 자름
// console.log(fruits);
fruits.splice(1, 1) //1번째부터 한개만
console.log(fruits)
fruits.splice(1, 1, 'coconut', 'kakao') //1번째부터 한개빼고, 거기에 추가
console.log(fruits)

// combine two arrays
const fruits2 = ['a', 'b']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index (indexOf, includes)
console.log("--------------------")
console.log(fruits);
console.log(fruits.indexOf("kakao")); //2
console.log(fruits.includes("kakao")); //true
console.log(fruits.includes("kakao", 5)); //false (2번째에 있어서)
console.log(fruits.includes("jamong")) //false
console.log(fruits.indexOf("jamong")) //-1

// lastindexOf
console.log("--------------------")
fruits.push('melon')
console.log(fruits)
console.log(fruits.indexOf("melon")) //두개이상이면, 첫인덱스 출력
console.log(fruits.lastIndexOf("melon")) //마지막인덱스 출력
console.log("---------------")
fruits.map((fruits, index, array) => U)