// function biogNumbers(numbers) {
//   let biogRe = 0;
//   for (const number of numbers) {
//     console.log(number);
//     biogRe = biogRe - number;
//   }
//   return biogRe;
// }

// const biog = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const result = biogNumbers(biog);
// console.log("Biog Numbers is", result);

// gun
// function gun(numbers) {
//   let gunR = 1;
//   for (const number of numbers) {
//     console.log(number);
//     gunR = gunR * number;
//   }
//   return gunR;
// }

// const num = [10, 20];
// const result = gun(num);
// console.log("Gun Result Is", result);

function gun(numbers) {
  let num = 1;
  for (const number of numbers) {
    console.log(number);
    num = num * number;
  }
  return num;
}

const num = [10, 20, 30];
const result = gun(num);
console.log("Get Gun Result is", result);
