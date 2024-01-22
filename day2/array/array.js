// Array declaration
const arr = [];
const arr1 = [1,2,3,4];
const arr2 = new Array("BMW", "Toyota", "Porche");

//Access array element
let temp1 = arr2[0];

//Array method and property
/*
Array length             -> The length property returns the length (size) of an array:
Array toString           -> The JavaScript method toString() converts an array to a string of (comma separated) array values.
Array at()               -> same with arr[pos]
Array join()             -> The join() method also joins all array elements into a string.
Array pop()              -> The pop() method removes the last element from an array:
Array push()             -> The push() method adds a new element to an array (at the end):
Array shift()            -> Shifting is equivalent to popping, but working on the first element instead of the last.
Array unshift()          -> The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
Array delete()           -> Warning !
                            Using delete() leaves undefined holes in the array.
                            Use pop() or shift() instead.
Array concat()           -> The concat() method creates a new array by merging (concatenating) existing arrays:
Array copyWithin()       -> The copyWithin() method copies array elements to another position in an array:
Array flat()             -> The flat() method creates a new array with sub-array elements concatenated to a specified depth.
Array splice()           -> The splice() method adds new items to an array.
Array toSpliced()        -> Array toSpliced() method as a safe way to splice an array without altering the original array.
Array slice()            -> The slice() method slices out a piece of an array into a new array:
*/
//Exercise

// Array declaration
const sampleArray = [4, 2, 7, 1, 9, 5, 4];
document.getElementById("providedId").innerText = `[${sampleArray.toString()}]`;


// 1. Tổng các phần tử
function sumArray(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  console.log("Tổng các phần tử:", sum);
  document.getElementById("exercise1").textContent = `Tổng các phần tử: ${sum}`;
}

// 2. Phần tử lớn nhất và nhỏ nhất
function findMinMax(arr) {
  if (arr.length === 0) {
    console.log("Mảng trống.");
    document.getElementById("exercise2").textContent = "Mảng trống.";
    return;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  console.log(`Phần tử nhỏ nhất: ${min}, Phần tử lớn nhất: ${max}`);
  document.getElementById("exercise2").textContent = `Phần tử nhỏ nhất: ${min}, Phần tử lớn nhất: ${max}`;
}

// 3. Đảo ngược mảng
function reverseArray(arr) {
  const reversedArr = arr.slice().reverse();
  console.log("Mảng sau khi đảo ngược:", reversedArr);
  document.getElementById("exercise3").textContent = `Mảng sau khi đảo ngược: ${reversedArr}`;
}

// 4. Tìm số lẻ và số chẵn
function separateEvenOdd(arr) {
  const evenArray = arr.filter(num => num % 2 === 0);
  const oddArray = arr.filter(num => num % 2 !== 0);

  console.log("Mảng số chẵn:", evenArray);
  console.log("Mảng số lẻ:", oddArray);

  document.getElementById("exercise4").textContent = `Mảng số chẵn: ${evenArray}\nMảng số lẻ: ${oddArray}`;
}

// 5. Tìm phần tử xuất hiện nhiều nhất
function mostFrequentElement(arr) {
  if (arr.length === 0) {
    console.log("Mảng trống.");
    document.getElementById("exercise5").textContent = "Mảng trống.";
    return;
  }

  const frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentElement = arr[0];

  arr.forEach(element => {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;

    if (frequencyMap[element] > maxFrequency) {
      maxFrequency = frequencyMap[element];
      mostFrequentElement = element;
    }
  });

  console.log(`Phần tử xuất hiện nhiều nhất: ${mostFrequentElement}`);
  document.getElementById("exercise5").textContent = `Phần tử xuất hiện nhiều nhất: ${mostFrequentElement}`;
}

// 6. Loại bỏ phần tử trùng lặp
function removeDuplicates(arr) {
  const uniqueArray = [...new Set(arr)];
  console.log("Mảng sau khi loại bỏ phần tử trùng lặp:", uniqueArray);
  document.getElementById("exercise6").textContent = `Mảng sau khi loại bỏ phần tử trùng lặp: ${uniqueArray}`;
}

// 7. Tổng các số âm và dương
function separateNegativePositiveSum(arr) {
  let negativeSum = 0;
  let positiveSum = 0;

  arr.forEach(num => {
    if (num < 0) {
      negativeSum += num;
    } else {
      positiveSum += num;
    }
  });

  console.log("Tổng các số âm:", negativeSum);
  console.log("Tổng các số dương:", positiveSum);

  document.getElementById("exercise7").textContent = `Tổng các số âm: ${negativeSum}\nTổng các số dương: ${positiveSum}`;
}

// 8. Chèn phần tử vào mảng
function insertElement(arr, element, position) {
  const newArr = [...arr];
  newArr.splice(position, 0, element);
  console.log(`Mảng sau khi chèn phần tử ${element} vào vị trí ${position}:`, newArr);
  document.getElementById("exercise8").textContent = `Mảng sau khi chèn phần tử ${element} vào vị trí ${position}: ${newArr}`;
}

// 9. Sắp xếp mảng
function sortArray(arr) {
  const sortedArray = arr.slice().sort((a, b) => a - b);
  console.log("Mảng sau khi sắp xếp:", sortedArray);
  document.getElementById("exercise9").textContent = `Mảng sau khi sắp xếp: ${sortedArray}`;
}

// 10. Tìm vị trí của một phần tử
function findElementIndex(arr, element) {
  const index = arr.indexOf(element);
  const result = index !== -1 ? `Vị trí của ${element} trong mảng là ${index}` : `${element} không có trong mảng.`;
  console.log(result);
  document.getElementById("exercise10").textContent = result;
}

// Call the functions with the sample array
sumArray(sampleArray);
findMinMax(sampleArray);
reverseArray(sampleArray);
separateEvenOdd(sampleArray);
mostFrequentElement(sampleArray);
removeDuplicates(sampleArray);
separateNegativePositiveSum(sampleArray);
insertElement(sampleArray, 3, 2);
sortArray(sampleArray);
findElementIndex(sampleArray, 9);
