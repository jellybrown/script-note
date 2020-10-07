// 1. String concatenation
console.log('my' + ' cat');
console.log(`string : 1 + 2 = ${1 + 2}`);

// 2.

// 3. Increment / decrement operators 
let counter = 2;
const preIncrement = ++counter; //먼저 더하기
// counter = counter +1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`) // 3 , 3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)


// 6. Logical operators: || (or), && (and) , ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// 맨앞이 true면, 바로 true를 return한다.
// 그래서 앞에는 가벼운것 쓰고, 뒤에는 함수 배치
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`)

//often used to compress long if-statement
//nullableObject && nullableObject.something
//if (nullableObject != null) {
///    nullableObject.something; //null이 아닐때 something value를 가져옴
//}

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('oh')
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // 맞아 너넨 똑같아 true
console.log(stringFive != numberFive); // 아니야 너넨 똑같아 false

// ===strict equality, no type conversion
const yujin1 = {
    name: 'yujin'
};
const yujin2 = {
    name: 'yujin'
};
const yujin3 = yujin1;

console.log(yujin1 == yujin2); //다른 reference 참조해서 false
console.log(yujin1 === yujin2);
console.log(yujin1 === yujin3); //3이 1의 ref를 참조하기때문에 true

//test
console.log("-----------test")
console.log(0 == false)
console.log(0 === false)
console.log('' == false)
console.log('' === false)
console.log(null == undefined)
console.log(null === undefined)

// 8. Conditional operator: if
// 9. Ternary operator: ?
console.log(name === 'yujin' ? 'yes' : 'no'); //간단하게 쓸때만

// 10. Switch : 타입검사
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!')
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while:${i}`)
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


//nested loops cpu에 안좋음

//break, continue
//01.
let j = 0;
while (j > 10) {
    console.log(`j값은 ${j}`);
    j++;
}