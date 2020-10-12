'use strict';

// Q1. make a string out of an array
{

    // ********************************* 틀리진 않았지만 join 도 가능
    const fruits = ['apple', 'banana', 'orange'];

    console.log(fruits.toString());

}


// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // *********************************** 틀림
    const arr = [];
    arr.push(fruits.split(','));
    console.log(arr)
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    let newArr = [];

    console.log("---------------------")
    for (let i = 0; i < 5; i++) {
        newArr.push(array.pop());
    }
    console.log(newArr)



}

// Q4. make new array without the first two elements
{
    //********************* 틀림, 새로운 배열을 만들어야 하기때문에 slice 써야함
    const array = [1, 2, 3, 4, 5];
    const newArr = array.splice(2);
    console.log(array); //  [1,2]
    console.log(newArr); // [3,4,5]



}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // ****************** 정답은 맞는데 find 사용가능
    students.forEach((students) => {
        if (students.score === 90) {
            console.log(students)
        }


    })


}

// Q6. make an array of enrolled students
{
    const enrollArr = [];
    students.forEach((students) => {
        enrollArr.push(students.enrolled)
    })
    console.log(enrollArr)
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const scoreArr = [];
    students.forEach((students) => {
        scoreArr.push(students.score);
    })
    console.log(scoreArr)
}

// Q8. check if there is a student with the score lower than 50
{
    students.forEach((students) => {
        if (students.score < 50) {
            console.log(students)
        }
    })
}

// Q9. compute students' average score
{
    let sum = 0;
    students.forEach((students) => {

        sum += students.score;
    })
    const avg = sum / students.length;
    console.log(avg);


}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const arr = [];
    for (let value of students) {
        arr.push(value.score)
    }
    const stringArr = arr.toString();
    console.log(stringArr)
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const arr = [];
    for (let value of students) {
        arr.push(value.score)
    }
    const newVal = arr.sort();
    console.log(newVal.toString());

}