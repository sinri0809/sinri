// 전후 작업 
// 테스트 전후에 해줘야할 작업들
// jest의 help 함수 

const func1 = require('./func1');


// // test 전에 한번만 실행
// beforeAll( async () => {
//   user = await func1.connectUserDB();
// })

// afterAll( async () => {
//   // test 후에 한번만 실행
//   return await func1.disconnectDB();
// })

// beforeEach(() => {
//   // test 전
// })

// afterEach(() => {
//   // test 후
// })

beforeAll(() => console.log("{{ before All"))
afterAll(() => console.log("after all }}"))
beforeEach(() => console.log("before Each"))
afterEach(() => console.log("after Each"))

test("0 + 1 = 1", () => {
  num = func1.add(0, 1)
  console.log("{}")
  expect(num).toBe(1);
})

describe("only about car", () => {
  let car; 

  beforeAll(() => console.log("[[ -- before All"))
  afterAll(() => console.log("-- after all ]]"))
  beforeEach(() => console.log("-- before Each"))
  afterEach(() => console.log("-- after Each"))
  

  test("0 + 1 = 1", () => {
    num = func1.add(0, 1)
    console.log("[]")
    expect(num).toBe(1);
  })
  
  // beforeAll(async() => {
  //   car = await func1.connectCarDB();
  // });
  // afterAll(async() => {
  //   return func1.disconnectCarDB();
  // });

  // test("car name", () => {
  //   expect(car.name).toBe("sonata")
  // })
})

