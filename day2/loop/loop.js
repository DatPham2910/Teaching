/* 1./ Đếm từ 1 đến 10:
Viết một chương trình sử dụng vòng lặp for/while/do while để in ra các số từ 1 đến 10.
*/
function Exercise1() {
    console.log("Exercise 1: For loop")
    for(let i = 1; i < 11; ++i) {
        console.log(i);
    }

    console.log("Exercise 1: while loop")
    let i = 1;
    while (i < 11) {
        console.log(i);
        ++i;
    }

    console.log("Exercise 1: Do-while loop")
    let j = 1;
    do{
        console.log(j);
        j++;
    } while (j < 11);
}

/*
2./ Đếm từ 10 xuống 1:
Viết một chương trình sử dụng vòng lặp for/while/do while để in ra các số từ 10 đến 1.
*/
function Exercise2() {
    console.log("Exercise 2: For loop");
    for (let i = 10; i >= 1; i--) {
      console.log(i);
    }

    console.log("Exercise 2: while loop");
    let j = 1;
    while (j <= 10) {
      console.log(j);
      j++;
    }

    console.log("Exercise 2: Do-while loop");
    let k = 1;
    do {
      console.log(k);
      k++;
    } while (k <= 10);
}

/* 
3./ Các số chẵn từ 1 đến 20:
Viết một chương trình sử dụng vòng lặp for/while/do while để in ra các số chẵn từ 1 đến 20.
*/

function Exercise3() {
    console.log("Sử dụng vòng lặp for:");
    for (let i = 2; i <= 20; i += 2) {
      console.log(i);
    }

    console.log("Sử dụng vòng lặp while:");
    let j = 2;
    while (j <= 20) {
      console.log(j);
      j += 2;
    }

    console.log("Sử dụng vòng lặp do-while:");
    let k = 2;
    do {
      console.log(k);
      k += 2;
    } while (k <= 20);
}

/* 
4./ Tính tổng các số từ 1 đến 50:
Viết một chương trình tính và in ra tổng các số từ 1 đến 50 sử dụng vòng lặp for/while/do while.
*/
function Exercise4() {
  console.log("Sử dụng vòng lặp for:");
  let sumFor = 0;
  for (let i = 1; i <= 50; i++) {
    sumFor += i;
  }
  console.log(`Tổng:${sumFor}`);

  console.log("Sử dụng vòng lặp while:");
  let sumWhile = 0;
  let j = 1;
  while (j <= 50) {
    sumWhile += j;
    j++;
  }
  console.log(`Tổng: ${sumWhile}`);

  console.log("Sử dụng vòng lặp do-while:");
  let sumDoWhile = 0;
  let k = 1;
  do {
    sumDoWhile += k;
    k++;
  } while (k <= 50);
  console.log(`Tổng: ${sumDoWhile}`);
}
Exercise4();
/*
5./ Giai thừa:
Viết một chương trình tính và in ra giai thừa của một số đã cho sử dụng vòng lặp for/while/do while.
*/
function Exercise5(number) {
    console.log(`Giai thừa của ${number} sử dụng vòng lặp for:`);
    let factorialFor = 1;
    for (let i = 2; i <= number; i++) {
        factorialFor *= i;
    }
    console.log(`Giai thừa: ${factorialFor}`);

    console.log(`Giai thừa của ${number} sử dụng vòng lặp while:`);
    let factorialWhile = 1;
    let i = 2;
    while (i <= number) {
        factorialWhile *= i;
      i++;
    }
    console.log(`Giai thừa: ${factorialWhile}`);


    console.log(`Giai thừa của ${number} sử dụng vòng lặp do-while:`);
    let factorial = 1;
    let j = 2;
    do {
      factorial *= j;
      j++;
    } while (j <= number);
    console.log(`Giai thừa: ${factorial}`);
}
Exercise5(6);
/*
7./ Tính tổng các số chẵn từ 1 đến 100:
Viết một chương trình tính và in ra tổng các số chẵn từ 1 đến 100 sử dụng vòng lặp for/while/do while.
*/
function Exercise7() {
    console.log("Sử dụng vòng lặp for:");
  let evenSumFor = 0;
  for (let i = 2; i <= 100; i += 2) {
    evenSumFor += i;
  }
  console.log(`Tổng các số chẵn: ${evenSumFor}`);

  console.log("Sử dụng vòng lặp while:");
  let evenSumWhile = 0;
  let j = 2;
  while (j <= 100) {
    evenSumWhile += j;
    j += 2;
  }
  console.log(`Tổng các số chẵn: ${evenSumWhile}`);

  console.log("Sử dụng vòng lặp do-while:");
  let evenSum = 0;
  let k = 2;
  do {
    evenSum += k;
    k += 2;
  } while (k <= 100);
  console.log(`Tổng các số chẵn: ${evenSum}`);
}
Exercise7();
/*
8./ Bảng cửu chương:
Viết một chương trình in ra bảng cửu chương từ 2 đến 9 sử dụng vòng lặp for/while/do while.
*/
const printMultiplicationTable = () => {
  console.log("Sử dụng arrow function và vòng lặp for:");
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    // console.log(); // Xuống dòng giữa các bảng cửu chương
  }

  console.log("Sử dụng vòng lặp do-while:");
let k = 2;
do {
  let l = 1;
  do {
    console.log(`${k} x ${l} = ${k * l}`);
    l++;
  } while (l <= 10);
  // console.log(); // Xuống dòng giữa các bảng cửu chương
  k++;
} while (k <= 9);
};
printMultiplicationTable();

/*
9./ Kiểm tra số nguyên tố:
Viết một chương trình kiểm tra và in ra tất cả các số nguyên tố từ 1 đến 50 sử dụng vòng lặp for/while/do while.
*/
const printPrimes = () => {
  console.log("vòng lặp for:");
  for (let i = 2; i <= 50; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }

  console.log("Sử dụng vòng lặp do-while:");
  let k = 2;
  do {
    let isPrime = true;
    let l = 2;

    do {
      if (k % l === 0) {
        isPrime = false;
        break;
      }
      l++;
    } while (l < k);

    if (isPrime) {
      console.log(k);
    }
    k++;
  } while (k <= 50);
};
printPrimes();

function displayResults() {
  document.getElementById('exercise1').innerText = captureOutput(Exercise1);
  document.getElementById('exercise2').innerText = captureOutput(Exercise2);
  document.getElementById('exercise3').innerText = captureOutput(Exercise3);
  document.getElementById('exercise4').innerText = captureOutput(Exercise4);
  document.getElementById('exercise5').innerText = captureOutput(() => Exercise5(6)); // You can provide any number for Exercise5
  document.getElementById('exercise7').innerText = captureOutput(Exercise7);
  document.getElementById('exercise8').innerText = captureOutput(printMultiplicationTable);
  document.getElementById('exercise9').innerText = captureOutput(printPrimes);
}

function captureOutput(callback) {
  // Capture console.log output and return it as a string
  let output = '';
  const originalConsoleLog = console.log;

  console.log = function (message) {
    output += message + '\n';
  };

  // Invoke the callback and restore the original console.log
  callback();

  // Restore the original console.log
  console.log = originalConsoleLog;

  // Return the captured output
  return output.trim(); // Trim any leading/trailing whitespace
}


// Call the displayResults function when the page is loaded
window.onload = displayResults;