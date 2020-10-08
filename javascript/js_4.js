function numeric_sum(obj) {
  let values = Object.values(obj);
  // numeric sum
  let ans_numeric = values.reduce(function (total, value) {
    if (typeof value == "number") {
      return total + value;
    } else {
      return total;
    }
  }, 0);
  // int_sum
  let ans_int = values.reduce(function (total, value) {
    if (typeof value == "number" && value % 1 == 0) {
      return total + value;
    } else {
      return total;
    }
  }, 0);
  return { integer: ans_int, numeric: ans_numeric };
}

let input_obj = {name: 'John', age: 25, height: 175, sex: 'male', weight: 75.5};
console.log(numeric_sum(input_obj));
