function add(price1, price2) {
  const total = price1 + price2;
  return total - 10;
}

const Bill = add(20, 545);
console.log("Discount 10Taka", Bill);
//
function add2(number1, number2) {
  return number1 + number2;
}

const bill2 = add2(40, 54);
console.log(bill2);
////

function doMath(num1, num2) {
  const sum = num1 + num2;
  const diff = num2 * num2;
  const multiply = num1 + diff;
  const result = multiply * 5;
  return result;
}

const totalDoMath = doMath(451, 545);

console.log(totalDoMath);
