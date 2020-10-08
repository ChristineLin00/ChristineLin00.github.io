function which_max_2(a, b) {
  return (a > b? a: b);
}

function which_max_3(a, b, c) {
  return which_max_2(a, b) > c ? which_max_2(a, b) : c;
}

function which_max_3_(a, b, c) {
  return ((a > b && a > c)? a :(b > c)? b : c);
}

console.log(which_max_2(5, -1));
console.log(which_max_3(5, 41, -5));
console.log(which_max_3_(5, -5, 41));
