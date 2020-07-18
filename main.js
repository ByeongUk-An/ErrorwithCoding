// // 함수의 종류: 내장함수, 사용자 정의함수

// console.log()
// console.error()
// alert();

// function name(a,b,c) {
//     // code
//     return ;
// };

// function scoll() {
//     console.log("HEllo World");
// }

// // scroll();
// function nn(a, b = 5, c = 3) {
//   a + b * c;
// }

// const result = nn(2);
// console.log(result);

// (function () {
//   //code
//   console.log("Hello");
// })();

// const dd = (d, e, f) => d * e - f;
// const result2 = dd(3, 4, 5);
// console.log(result2);
// const end = {
//   name: "안병욱",
//   age: 28,
//   gender: "male",
//   food: {
//     first: "gimchi",
//     two: "gogi",
//   },
// };

// const {
//   name,
//   age,
//   gender,
//   food:  first, two },
// } = end;

// console.log(gender, name, first, two);
// const exam = ["one", "two", "three"];

// const [one, two, three: {}] = exam;
// console.log(one, two, three);

const firstAni = ["Dog", "Cat", "Dock"];
const seconAni = ["Tiger", "Ele"];

const allAni = [...firstAni, ...seconAni];
console.log(allAni);

// Class

const obj = new Date();

// PrototypeLink PrototypeObject

//function Human(name, age) {
//  this.name = name;
//  this.age = age;
//}

//console.log(end, vins);
//const HumanObj = new Human();

// class Human {
//   constructor(name, age, gender, home) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.home = home;
//   }

//   hello() {
//     console.log("Hello");
//   }
// }

// const end = new Human("end", 28, "Fem", "Dea");
// end.hello();
// console.log(end);
let arr = ["ewfawe", 3, 5, 7];
let arr2 = arr.map((str, index) => {
  if (index == 0) return (str = "bbb");
  return str + 2;
});
console.log(arr2);

let arr3 = [4, 9, 19, 21, 5912, 12323];
let arr4 = arr3.filter((n) => {
  return n % 3 != 0;
});
console.log(arr4);

let arr5 = [4, 9, 19, 21, 5912, 12323];
let arr6 = arr5.find((n) => {
  return n % 7 == 0;
});

console.log(arr6);

let arr7 = [4, 9, 19, 21, 5912, 12323];
let value = arr7.reduce((pre, cur) => {
  if (cur % 3 == 0) pre.push(cur);
  return pre;
}, []);
console.log(value);
