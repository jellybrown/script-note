// Function

// 1. Function declaration
//function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// function is object in JS
function log(message) {
    console.log(message);
}
log("Hi~~");

// 2. Parameters (인자)
function changeName(obj) {
    obj.name = 'coder';
}
const yu_jin = {
    name: 'yu_jin'
};
changeName(yu_jin);
console.log(yu_jin)

// 3. Default parameters : 인자안에 default 정의가능 (ES6에서 추가)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi~~');

// 4. Rest parameters (ES6에서 추가)
function printAll(...args) { //배열
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg))

}

printAll('a', 'b', 'c')

// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello'; //밖에서 출력못함. scope
    console.log(message); //local variable
    console.log(globalMessage);
}
printMessage();


sum(2, 3); //hoisting
// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Ealry return, early exit
// bad : 길어지는 코드들을 앞에 놓는 것
function upgradeUser(user) {
    if (user.point > 10) {
        // long ~
    }
}

// good : 코드 최적화를 위해 return이 먼저되게 함수를 짠다.
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long
}

// Callback function 
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log("yes!");
};

const printNo = function print() {
    console.log("no!");
}

randomQuiz("babo", printYes, printNo); //맞으면 yes호출, 틀리면 No호출
randomQuiz("love you", printYes, printNo)


// Arrow function 
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    return a * b; //블록도 넣으면 return을 이용해 값을 반환해야한다.
}





// quiz ~~
function calculate(command, a, b) {
    if (command === 'add') {
        return a + b;
    } else if (command === 'substract') {
        return a - b;
    } else if (command === 'divide') {
        return a / b;
    } else if (command === 'multiply') {
        return a * b;
    } else if (command === 'remainder') {
        return a % b
    }
}

console.log(`if문으로 ${calculate('add',2,3)} 하지만 정답은..`)

//x -> 정해진 데이터 처리는 switch문 쓰기

function calcul(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
    }
}
console.log(`switch문으로 ${calcul('add', 4, 5)}`)