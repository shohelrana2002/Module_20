/* 

*/

function evenSizeLength(str) {
  const size = str.length;
  console.log(str, size);

  if (size % 2 === 0) {
    console.log("even size");
    return true;
  } else {
    console.log("odd size");
    return false;
  }
}

// evenSizeLength("Dhaka");
// evenSizeLength("size");

function double(num1, num2) {
  if (num1 % 2 === true) {
    const result = num1 * 2;

    return result;
  } else {
    const result2 = num2 * 3;

    return result2;
  }
}

// console.log(double(5, true));
// console.log(double(5, false));

function numberOfElements(number) {
  const lrn = number.length;
  return lrn;
}

const result = numberOfElements([10, 50, 2, 1564, 4, 8, 45, 48, 74, 54, 87]);
console.log(result);
