const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    address: {
      street: "123 Main St",
      city: "Anytown",
      zipCode: "12345"
    },
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  };
  
  function objectToArray(obj) {
    const result = [];
  
    for (const key in obj) {
      if (typeof obj[key] === "function") {
        result.push([key, obj[key].call(obj)]);
      } else if (typeof obj[key] === "object") {
        result.push([key, objectToArray(obj[key])]);
      } else {
        result.push([key, obj[key]]);
      }
    }
  
    return result;
  }
  
  const resultArray = objectToArray(person);
  console.log(resultArray);
  