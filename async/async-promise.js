'use strict';



// ------------------------------------------------
// class안에서 promise 이용 가능하다.
// 정상적으로 작동할때의 return과, 실패했을때의 return을 작성할때. 

class UserStorage {
    async loginUser(id, password) {
        return setTimeout(() => {
            if ((id === 'yujin' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                return (id) // resolve를 통해 id를 전달
            } else {
                reject(new Error('error!!'))
            }
        }, 2000)
    }


    async getRoles(user) {
        return setTimeout(() => {
            if (user === 'yujin') {
                resolve({
                    name: 'yujin',
                    role: 'admin'
                })
            } else {
                reject(new Error('error!'))
            }
        }, 2000)
    }

}



}

const user1 = new UserStorage();
const id = prompt('enter your id!');
const password = prompt('enter your password');



user1
    .loginUser(id, password) //loginuser의 id와 password를 전달한다음
    //.then(user1 => user1.getRoles()) // 정상이라면 user1을 받아와서, user1의 getRoles함수를 호출
    .then(user1.getRoles) //인자가 같아서 생략가능
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`)) //getRoles 실행이 된다면
//68번째줄 getRoles(user)