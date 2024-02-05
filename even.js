// function evenNumberOnly(numbers) {
//   const even = [];
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       console.log(number);
//       even.push(number);
//     }
//   }
//   return even;
// }

// const numbers = [10, 2, 0, 2, 548, 45, 487, 5, 48, 784, 5];
// const result = evenNumberOnly(numbers);

// console.log(result);
// function evenNumbers(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       console.log(number);
//       sum = sum + number;
//     }
//   }
//   return sum;
// }

// const numbers = [10, 2, 5];
// const result = evenNumbers(numbers);
// console.log(result);

// odd numbers

function oddNum(numbers1) {
  let odd = 0;
  for (const number of numbers1) {
    if (number % 2 === 1) {
      console.log(number);
      odd = number - odd;
    }
  }
  return odd;
}

const num = [11, 10, 2, 31];
const result2 = oddNum(num);
console.log("Odd Total Numbers Is", result2);
