// 자바스크립트는 싱글스레드기반 언어이기 때문에 이벤트 루프를 통해 비동기로 작동한다.
// 비동기적인걸 동기적으로 처리하기위해서 배우는것
// function write(callback) {
//   setTimeout(() => {
//     const start = Date.now();
//     for(let i = 0; i < 1000; i++){}
//     const result = Date.now()-start;
//     console.log(result);
//     callback(result);
//   }, 1000);
// }

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("result");
//   }, 2000);
// });

// myPromise.then(result => {
//   console.log(result);
// });

//.then().then().then().catch()
//catch 는 어디서 에러가 발생했는지 찾을수없다.
// 조건으로 쪼개기 힘들다 / 분기적으로 나누기가 힘들다.

function tm(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mid");
      resolve("resolve");
    }, ms);
  });
}
//프로미스가 반환될거같으면 async await를 써주면된다.

const proc = async () => {
  console.log("HI");
  const value = await tm(500);
  console.log("Bye");
  return value;
};
//await는 함수를 호출하는 용도이며 이것이 실행할동안 뒤에있는것은 작동하지
// 않는다.
proc().then((result) => console.log(result));

// es8
