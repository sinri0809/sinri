// test("test", () => {
//   expect(1).toBe(1);
// })

const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// test("mock", () => {
//   console.log(mockFn.mock.calls); // 함수가 몇 번 호출됐는지, 어떤 인자가 넘어갔는 지
// })

// test("calls ", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// })

test("args", () => {
  // expect(mockFn.mock.calls)
});

function forEachAdd1(arr){
  arr.forEach(num => {
    mockFn(num + 1)
  })
}

forEachAdd1([1, 2, 3])

test("calls 3 times", () => {
  expect(mockFn.mock.calls.length).toBe(3)
})
mockFn
.mockReturnValueOnce(10)
.mockReturnValueOnce(20)

mockFn();