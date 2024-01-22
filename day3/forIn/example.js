// Parent object
const parentObject = {
    propertyA: "Value A",
    propertyB: "Value B"
  };
  
// Child object inheriting from parentObject
const childObject = Object.create(parentObject);
childObject.propertyC = "Value C";

for (let key in childObject) {
    console.log(`Property: ${key}, Value: ${childObject[key]}`);
  }

  console.log("hasOwnProperty");
for (let key in childObject) {
  if (childObject.hasOwnProperty(key)) {
    console.log(`Property: ${key}, Value: ${childObject[key]}`);
  }
}
  