// 배열 0으로 초기화
let arr = new Array(5).fill(0);
// console.log(arr);

// console.log(Array.from("foo"))
// console.log(Array.from("foo", (element, index) => {
//   return element + element;
// }))

// 빈 배열 크기 3
console.log(Array(3))
// 크기 10의 배열에 index 채워넣기 = 정수 배열 만들기
console.log(Array.from({ length: 10 }, (element, index) => {
  return index
}))

console.log(
  Array
    .from({ length: 3 }, (_, index) => index)
    .reduce((a, b) => a + b)
)

let arr1 = Array(3).fill(3);
let arr2 = Array.from(Array(3), (_, index) => index);

console.log(arr1)
console.log(arr2)
console.log(arr1.concat(arr2))