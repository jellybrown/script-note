'use strict';
// class: template (붕어빵 틀)
// object: instance of a class (팥붕어빵, 크림붕어빵..)
// ES6~

// 1. Class declarations
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //method
    speak() {
        console.log(`${this.name}: hello!`)
    }

}

const yujin = new Person('yujin', 26);
console.log(yujin.age)
yujin.speak();


// 2. Getter and setters (입력오류 방지)
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


    get age() { //값 리턴
        return this._age; //쓰는순간 위에서 호출하기때문에 _붙여줌
    }

    set age(value) { //값설정, 그래서 value를 가져와야함 
        this._age = value < 0 ? 0 : value;
    }

}
const user1 = new User('Steve', 'Job', -1)
console.log(user1.age)


// 3. Fields (public, private)
// Too soon
class Experiment {
    publicField = 2;
    // #privatefield = 0; 너무 일러서 지원안됨
}
const experiment = new Experiment();
console.log(experiment.publicField)
// console.log(experiment.privatefield) 

// 4. Static properties and methods
// Too soon!
// static이 붙으면, class에 붙어있는 아이를 만드는 것이다.
class Article {
    static publisher = 'Hello world'

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
console.log(article1.publisher)
console.log(Article.publisher)
// article1.printPublisher(); 출력안됨
Article.printPublisher();

// 5. Inheritance 상속과 다양성
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`) // 96번째줄
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} //확장
class Circle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); //기존 공통적으로 정의한 내용은 유지하면서, 추가하려면 사용
        console.log("삼각형")
    }
    getArea() {
        return (this.width * this.height) / 2; //overriding
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const circle = new Circle(25, 25, 'red')
console.log(circle.getArea());
const triangle = new Triangle(25, 25, 'green')
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof Shape); //t
console.log(triangle instanceof Object); //t