'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('yujin');
        reject(new Error('no network')) //js에서 제공하는 오브젝트
    }, 2000)
});

// 2. Consumers: then, catch, finally

// promise.then((value) => console.log(value)) yujin 출력
promise
    .then((value) => {
        console.log(value)
    })
    .catch((error) => { //return된 promise에 catch 등록
        console.log(error)
    })
    .finally(() => {
        console.log("finally")
    })


// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        })
    })
    .then(num => console.log(num));

// 4. Error Handling 
const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
});
const getEgg = hen => new Promise((resolve, reject) =>
    setTimeout(() => resolve(` ${hen} => 🥚`)), 1000);
const cook = egg => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000)
});

getHen()
    .then(hen => getEgg(hen)) //getHen이 정상이면 getEgg실행
    .then(egg => cook(egg))
    .then(meal => console.log(meal));

getHen() //
    .then(getEgg) //이렇게 인자가 같을때는 생략 가능
    .then(cook)
    .then(console.log);


// 4 - 2. Error Handling (오류났을 경우)
const getHen2 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
});
const getEgg2 = hen => new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error(`error! ${hen} => 🧀`)), 1000));
const cook2 = egg => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000)
});

getHen2()
    .then(hen => getEgg2(hen)) //getHen이 정상이면 getEgg실행
    .catch(error => {
        return '🍕' // catch했기 때문에 promise체인이 실패하지않고, 작동이 됨
    })
    .then(egg => cook2(egg))
    .then(meal => console.log(meal))
    .catch(console.log) // 에러캐치