'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

// object = { key : value };
// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const yujin = {
    name: 'yujine',
    age: 20
}
print(yujin);

//추가, 삭제가 가능하다. -> 권장x


// 2. Computed properties
// key should be always string
console.log(yujin.name); // 생성되는 그순간 사용할 때(그 순간 키 값을 받아오고 싶을때)
console.log(yujin['name']); //정확하게 모를때(runtime에서 정할 때)


function printValue(obj, key) {
    console.log(obj.key); // 이순간 key값이 결정된게 없음 -> undefiend
    console.log(obj[key]); // 이렇게 computed properties 써야함
}

printValue(yujin, 'age');


// 3. Property value shorthand
const person1 = {
    name: 'bob',
    age: 2
};
const person2 = {
    name: 'steve',
    age: 3
};
const person3 = new Person('yujins', 22)
console.log(person3)

// 4. Constructor function (class와 constructor 정할때와 비슷하다.)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in yujin) //16번째 줄, yujin 안에 name이 있다.
console.log('age' in yujin)
console.log('random' in yujin) //false


// 6. for..in vs for..of
// for(key in obj)
for (let key in yujin) {
    console.log(key)
}

//for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let value of array) {
    console.log(value)
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {
    name: 'kim',
    age: '19'
};
const user2 = user;
console.log(user)

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

// assign
// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user)
console.log(user4)

// another example
const fruit1 = {
    color: 'red'
};
const fruit2 = {
    color: 'blue',
    size: 'big'
};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //뒤에있는 아이껄로 덮어씌운다.
console.log(mixed.size);