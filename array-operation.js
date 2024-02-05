// function declare
// step 1: declare a function
// step 2:call to check function properly
// step 3: set  parameter
// step 4: pass the parameter
// step: do the function kaj
function sumOfNumber(Number) {
  let sum = 0;
  for (const numbers of Number) {
    console.log(numbers);
    sum = sum + numbers;
  }
  return sum;
}
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = sumOfNumber(num);
console.log("sum of numbers is", sum);
