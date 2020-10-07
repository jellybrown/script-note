'use strict'; //비상식적인거 발생하지않게 


// 2.Variable , rw(read/write)
// let (added in ES6)
let global = 'hi'; //최소한으로 쓰기
{
    let name = 'yujin';
}
console.log(name)
console.log(global);

// var 
// var hoisting  : 어디서 선언했는지 상관없이 끌어올려줌
console.log(age) // 선언도 안했는데 undefined 나옴(변수는 선언됐다는 뜻)
age = 4;
var age;

//console.log(age2) // let으로 했을땐 호이스팅 x
//age2 = 4; //출력이 안됨
let age2;

// 3. Constant , r(read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const days = 4;


//Note!!
// Immutable date types: frozen
// Mutable data types: all objects by default are mutable in JS



// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiend, symbol (더이상 나눠지지않는)
// object, box container(kim.age)

//number - speical numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn);

//null
let nothing = null;


//undefined
let x;

//symbol, create unique identifiedrs for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false출력

// object
const kim = {
    name: 'yujin',
    age: 20
};
kim.age = 11;
console.log(kim)

// 5. Dynamic typing: dynamically typed language
// 런타임으로 실시간으로 타입이 정해지기때문에 에러가 남 --> 타입스크립트공부
// 선언후, 재선언하면 내용에 따라 type이 바뀜. (number -> string ..)