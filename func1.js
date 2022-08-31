const func1 = {
  add: (num1, num2) => num1 + num2,
  connectUserDB: () => {
    return new Promise(response => { 
      setTimeout(() => {
        response({
          name: "Mike",
          age: 30,
          gender: "male",
        })
      }, 500);
    })
  },
  disconnectDB: () => {
    return new Promise(response => {
      setTimeout(() => {
        response();
      }, 500);
    })
  },
  connectCarDB: () => {
    return new Promise(response => { 
      setTimeout(() => {
        response({
          name: 'sonata',
          brand: "dndn"
        })
      }, 500);
    })
  },
  disconnectCarDB: () => {
    return new Promise(response => {
      setTimeout(() => {
        response();
      }, 500);
    })
  },
}

module.exports = func1;