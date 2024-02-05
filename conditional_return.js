function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(2));

//  short cut

function issOdd(number) {
  if (number % 2 === 1) {
    return true;
  }
  return false;
}

console.log(issOdd(10));
console.log(issOdd(5));
