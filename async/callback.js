'use strict';

// JavaScript is synchronous. (동기적)
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
console.log('1') // 예상되는 순서
setTimeout(() => console.log('2'), 1000); // 이런걸 비동기적이라고 한다, 콜백함수
console.log('3')

// 콜백 => 비동기일때만? no!

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log("hi~~~"));

// Asynchronous callback

function printWithDelay(print, timeout) {
    setTimeout(print, timeout)
}

printWithDelay(() => console.log("async callback"), 2000);


//Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'yujin' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);

            } else {
                onError(new Error('not found'))
            }
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'yujin') {
                onSuccess({
                    name: 'yujin',
                    role: 'admin'
                });
            } else {
                onError(new Error('no access'));
            }
        })
    }
}

const user1 = new UserStorage();
const id = prompt('enter your id!');
const password = prompt('enter your password');
user1.loginUser(id, password, user => {
    user1.getRoles(
        user,
        userWithRole => {
            alert(
                `Hello ${userWithRole.name}, you have a ${userWithRole.role} role. `
            )
        },
        error => {
            console.log(error)
        })
}, error => {
    console.log(error)
})