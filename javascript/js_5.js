function which_max_2(a, b) {
  return (a > b? a: b);
}

function which_max_3(a, b, c) {
  return which_max_2(a, b) > c ? which_max_2(a, b) : c;
}

console.log(which_max_2(5, -1));
console.log(which_max_3(5, 41, -5));
