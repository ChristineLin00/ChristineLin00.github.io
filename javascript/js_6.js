// function 1 : sort the array
function sort_array(input){
  let descendingBythird = input.sort((a, b) => b[2].localeCompare(a[2]));
  let ascendingBysecond = descendingBythird.sort((a, b) => a[1] - b[1]);
  return ascendingBysecond;
}

let input_arr = [
  [1, 5, "a"],
  [1, 10, "a"],
  [1, 10, "z"],
  [1, 1, "a"],
];

console.log(sort_array(input_arr));

// function 2 : sort the object
function sort_obj(input) {
  let asc_age = input.sort((a, b) => b.age - a.age);
  let des_sex = asc_age.sort((a, b) => a.sex.localeCompare(b.sex));
  return des_sex;
}

let input_arr_2 = [
  { sex: "M", age: 12 },
  { sex: "M", age: 25 },
  { sex: "F", age: 15 },
  { sex: "F", age: 35 },
];

console.log(sort_obj(input_arr_2));