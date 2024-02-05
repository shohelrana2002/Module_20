function vag(numbers) {
  let vagResult = 1;
  for (const number of numbers) {
    console.log(number);
    vagResult = vagResult / number;
  }
  return vagResult;
}

const num = [10, 50];
const result = vag(num);
console.log("Vag Resut Is ", result);
