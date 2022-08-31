# jest practice

> [jest docs](https://jestjs.io/docs/getting-started)

### install
```
yarn add -dev jest 
npm instal --save-dev jest
```

`test.js`로 끝나는 것들은 jest에 의해서 테스트된다. 

### Matchers
```
- toBe  
- not.toBe
// 객체타입 등은 재귀적으로 확인하기 때문에 toEqual을 사용한다  
- toEqual  
- toStrictEqual  
```
Truthiness
```
- toBeNull  
- toBeUndefined  
- toBeDefined

- toBeTruthy
- toBeFalsy
```
Numbers
```
- toBeGreaterThan
- toBeGreaterThanOrEqual
- toBeLessThan
- toBeLessThanOrEqual
// float
- toBeCloseTo
```
Strings
```
- toMatch
- not.toMatch
```
Iterables
```
- toContain
```
Exceptions
```
- toThrow
- toThrow(Error)
```

### async
callback
> jest는 test의 마지막 스크립트를 읽으면 test를 끝내버린다. 그래서 비동기함수와 같은 콜백 함수들이 들어간 경우에는 `done`이라는 매개를 통해서 끝나는 시점을 명시해주어야 한다. 
```
done();
```
Promise
> 하지만 promise가 return 되는 경우에는 `done`을 사용하지 않아도된다. 대신 expect를 `return`하는 형태로 테스트코드를 작성한다
```
return expect()...
// or
return expect(promisefunction).resolves.toBe..
return expect(promisefunction).rejects.toBe..
```
### teardown
```
afterAll()
beforeAll()

afterEach()
beforeEach() // test case마다 실행

describe("", () => {
  // test scope 
})
```
```
test.only() // 해당 test 이외에 다른 테스트는 skip
test.skip() // 해당 test skip
```

### mock
> 작업에 따라서는 test 코드가 제품 코드보다 많아지는 경우가 발생할 수 있거나, 외부 요인에 의한 영향이 커질 수 있다. 

-> mock function: 테스트 하기 위해 흉내만 내는 함수  
`jest.fn()`  

---

```
import { waitFor, fireEvent, render, screen } from '@testing-library/react';

```
### snapshots
```
toMatchSnapshot()
```
---

test 코드는 프로젝트/작업 상황에 따라서 잘 고려해서 작성해야한다.

### VScode Extensions
<Jest> by Orta