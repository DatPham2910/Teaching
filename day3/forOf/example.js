const numbers = [1, 2, 3, 4, 5];
console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log("Using for...in loop:");
for (const index in numbers) {
  console.log(numbers[index]);
}

console.log("Using for...of loop:");
for (const number of numbers) {
  console.log(number);
}
