const func = {
  add: (num1, num2) => {
    return num1 + num2
  },
  makeUser: (name, age) => {
    return {
      name: name,
      age: age,
      gender: undefined
    }
  },
  getName: callback => {
    const name = "Mike";

    setTimeout(() => {
      // callback(name)
      throw new Error("err")
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(age);
      }, 2000);
    })
  }
}

module.exports = func;