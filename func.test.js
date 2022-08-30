const func = require('./func');

test('1 is 1', () => {
  expect(1).toBe(1);
})

test("null is null", () => {
  expect(null).toBeNull();
})

test('2 plus 3 is 5', () => {
  expect(func.add(2, 3)).toBe(5);
})

test("3 plus 3 is 5", () => {
  expect(func.add(3, 3)).not.toBe(5);
})

test("return object", () => {
  expect(func.makeUser("mike", 30)).toStrictEqual({
    name: "mike",
    age: 30,
    gender: undefined
  })
})

test("check object strictly", () => {
  expect(func.makeUser("mike", 30)).toStrictEqual({
    name: "mike",
    age: 30,
    gender: undefined
  })
})

test("string over 1 is true", () => {
  expect(func.add("hello", "world")).toBeTruthy();
})

test("2 is over than 1", () => {
  expect(2).toBeGreaterThan(1)
});

test("ID is under than 10 syll", () => {
  const id = "black pink in the area";
  expect(id.length).not.toBeLessThanOrEqual(10);
})

test("password should be 4", () => {
  expect("2929".length).toEqual(4);
})

test("floating case", () => {
  expect(func.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("is there a in Hello world", () => {
  expect("hello world").toMatch(/h/i);
});

test("is mike on the user list?", () => {
  const user = "Mike";
  const userList = ["Tom", "Jane", "Kai", "Mike"];

  expect(userList).toContain(user);
});

test("exception", () => {
  // expect(throw new Error("expected error")).toThrow('expected error');
})

// test("name is Mike after 3s", (done) => {
//   function callback(name){
//     expect(name).toBe("Tom");
//     done();
//   }

//   func.getName(callback);
// })

// test("err catch", (done) => {
//   function callback(name){
//     try{
//       expect(name).toBe("Mike")
//       done();
//     }catch{
//       done();
//     }
//   }

//   func.getName(callback);
// })

test("age is 30 after 1s", async () => {
  // return func.getAge().then(age => {
  //   expect(age).toBe(31)
  // })

  // return expect(func.getAge()).resolves.toBe(30)

  await expect(func.getAge()).resolves.toBe(30)

  // const age = await func.getAge();
  // expect(age).toBe(30);
});


