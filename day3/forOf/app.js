let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const number of numbers) {
  sum += number;
}
console.log("Tổng:", sum);


let numbers = [3, 5, 7, 2, 9];
let max = numbers[0];
for (const number of numbers) {
  if (number > max) {
    max = number;
  }
}
console.log("Phần tử lớn nhất:", max);

let numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log(number);
  }
}

let str = "Hello";
let reversedStr = '';
for (const char of str) {
  reversedStr = char + reversedStr;
}
console.log(reversedStr);

let words = ["hello", "world", "javascript"];
let totalLength = 0;
for (const word of words) {
  totalLength += word.length;
}
console.log("Tổng độ dài:", totalLength);


let strings = ["hello", "world", "javascript"];
for (const string of strings) {
  console.log(string[0]);
}


let numbers = [1, 3, 4, 6, 9];
let sum = 0;
for (const number of numbers) {
  if (number % 3 === 0) {
    sum += number;
  }
}
console.log("Tổng các số chia hết cho 3:", sum);


let products = [
    { name: "Product 1", price: 150000 },
    { name: "Product 2", price: 90000 },
    { name: "Product 3", price: 70000 }
  ];
  for (const product of products) {
    if (product.price < 100000) {
      console.log(product.name);
    }
  }
  

let strings = ["hello", "world", "javascript"];
for (const string of strings) {
  console.log(`'${string}' có ${string.length} ký tự`);
}



let elements = [1, 2, 3, 2, 3, 3, 4];
let frequencyMap = {};
let maxElement = elements[0], maxFrequency = 1;

for (const element of elements) {
  if (frequencyMap[element]) {
    frequencyMap[element]++;
  } else {
    frequencyMap[element] = 1;
  }
  
  if (frequencyMap[element] > maxFrequency) {
    maxFrequency = frequencyMap[element];
    maxElement = element;
  }
}

console.log("Phần tử xuất hiện nhiều nhất:", maxElement);
