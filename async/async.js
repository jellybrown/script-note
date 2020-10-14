// async & await
// clear style of using promise

// 1. async : promise 안쓰고, 좀더 쉽게 promise를 쓸 수 있는 syntactic sugar
// This makes it easier to use promise without using them.
async function fetchUser() {
    // do network request in 10 secs...
    return 'yujin';
}

const user = fetchUser();
user.then(console.log)
console.log(user)

// 2. await : async와 함께!
// Await will be used with async API. 
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// 3. useful APIs 
// 'all' is useful promise's API that return all arrays.
function pickFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join("+"));
}

pickFruits().then(console.log)