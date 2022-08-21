console.log("HI");

const arr = Array
  .from(new Array(5), (_, k) => k + 5) // [5, 6, 7, 8, 9]
  .reduce((acc, cur) => acc + cur, 0) // 35

console.log(arr)

const arr2 = Array(5); // [empty * 5]
const arr3 = Array(5, 3); // [5, 3]
console.log(arr2)


const names = ['Lee', 'Kim', 'Park', 'Lee', 'Kim'];
const namesSet = new Set(...names); // {"L", 'e'}
const namesSet2 = new Set(names); // {'Lee', 'Kim', 'Park'}

const namesSet3 = Array.from(new Set(names)) // ['Lee', 'Kim', 'Park']
const arrNamesSet2 = [...namesSet2]; //  ['Lee', 'Kim', 'Park']

console.log(namesSet3)

function check(value) {
  if (!!value) {
    console.log(value)
  }
  else {
    console.log('wrong')
  }
}

check(null)
check(0)
check(undefined)
check('')
check(0 - 's') // == NaN
check(NaN)

check(1 / 0) // Infinity
check(5)