class Agedperson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = "Max";

  constructor() {
    // super(); // this 사용 전 호출
    this.age = 30;
    //this.greet = function(){...}
  }
  // greet = () => {
  //   console.log(
  //     "Hi, I am " + this.name + " and I am " + this.age + " years old."
  //   );
  // };
  // 실제 이 객체의 모든 인스턴스에 대해 생성이 됨 -> 더 많은 메모리 점유(미미한 차이)
  // 도움되는 사례도 있음) 화살표 함수로 이벤트 리스너 등과 바인딩을 하려는 경우는 이 방법
  // 가독성이 더 나음

  greet() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  } // this를 정확하게 바인딩 해야함
}

// function Person() {
//   this.age = 30;
//   this.name = "Max";
//   // this.greet = function() {...};
// }

// Person.prototype.greet = function () {
//   console.log(
//     "Hi, I am " + this.name + " and I am " + this.age + " years old."
//   );
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.length);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype.__proto__);

// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p.__proto__ === p.__proto__); // true

// const button = document.getElementById("btn");
// button.addEventListener("click", p.greet.bind(p)); // greet 내부의 this가 p를 참조하도록

const course = {
  // new Object()
  title: "Javascript - The Complete Guide",
  rating: 5,
};

// 객체 생성자 함수
// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Max",
      writable: false,
    },
  }
);

// student.name = "Max";

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress();

console.log(student);

course.printRating();
