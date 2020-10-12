// Q1. make a string out of an array
{
    // join: 아무것도 안쓰면 string으로
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result)
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // split
    console.log(fruits.split(","))
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    // reverse (조심: 원래 배열도 변화된 값으로 return한다. )
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result)
}

// Q4. make new array without the first two elements
{
    // splice : 원래 배열까지 수정
    // slice : 새로 반환
    const array = [1, 2, 3, 4, 5];
    const newArr = array.slice(2, 5);
    console.log(array)
    console.log(newArr)
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
    const result = students.find((student) => student.score === 90);
    console.log(result)

}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled)
    console.log(result)
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    // map: 맵핑한다. 새로운 배열로 return! 
    // 어떤 특정값만 뽑아내고싶을때 사용하면 좋을듯
    const result = students.map((student) => student.score)
    console.log(result)
}

// Q8. check if there is a student with the score lower than 50
{
    // some  하나라도 만족하면 true
    // every 모든것이 만족하면 true
    const result = students.some((student) => student.score < 50)
    const result2 = students.every((student) => student.score < 50)
    console.log(result)
    console.log(result2)
}

// Q9. compute students' average score
{
    // reduce : return 값이 다음번째 prev로 넘어감 (누적)
    // 단, 계산할 경우 initial value 설정해줘야 제대로 나옴
    const result = students.reduce((prev, curr) => prev + curr.score, 0)
    console.log(result / students.length)
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    // map , join
    const result = students.map((student) => student.score).join();
    console.log(result)

    // 만약 50점 이상인사람만 찾고싶다면,
    const result2 = students
        .map((student) => student.score)
        .filter((score) => score > 50)
        .join();
    console.log(result2)
    // 이런걸 함수형 프로그래밍이라고 한다.
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((student) => student.score)
        .sort()
        .join();
    console.log(result)
}