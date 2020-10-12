// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json)

json = JSON.stringify(['apple', 'banana'])
console.log(json)

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),

    jump: () => {
        console.log(`${this.name} can jump!`)
    }
}

// --1
json = JSON.stringify(rabbit)
console.log(json) //symbol, 함수는 json에 나오지않는다.

// --2
json = JSON.stringify(rabbit, ['name', 'color']) //원하는 것만 뽑아올수있다.
console.log(json)

// --3
json = JSON.stringify(rabbit, (key, value) => { // key, value값으로 나눠 출력할수도 있다.
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'yujin' : value;
});
console.log(json)


// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit); //JSON으로 만듦
console.log(json)
const obj = JSON.parse(json); //object로 만듦 (*)
console.log(obj)

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); err, 왜냐면 string으로 변환된거라 (*)참고, object라도 date를 가져올수 없음.(날짜형식이 아님)
// 이때 parse에서 reviver 이용
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2)
console.log(rabbit.birthDate.getDate());
console.log(obj2.birthDate.getDate())