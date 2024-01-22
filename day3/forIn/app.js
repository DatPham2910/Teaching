// Exercise 1
const person = {
    name: "John",
    age: 30,
    city: "Anytown"
};

let exercise1Result = "Thuộc tính của Đối tượng:\n";
for (let key in person) {
    exercise1Result += `${key}: ${person[key]}\n`;
}
document.getElementById('exercise1').innerText = exercise1Result;

// Exercise 2
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};

let propertyCount = 0;
for (let key in car) {
    propertyCount++;
}
document.getElementById('exercise2').innerText = `Số lượng thuộc tính: ${propertyCount}`;

// Exercise 3
const mixedObject = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "traveling"],
    address: {
        street: "456 Main St",
        city: "Anothercity"
    }
};

let exercise3Result = "Kiểu dữ liệu của Thuộc tính:\n";
for (let key in mixedObject) {
    exercise3Result += `${key}: ${typeof mixedObject[key]}\n`;
}
document.getElementById('exercise3').innerText = exercise3Result;