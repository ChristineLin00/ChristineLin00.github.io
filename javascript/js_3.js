
function getSum(arr) {
	let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function getMean(arr) {
  let sum = getSum(arr);
  let mean = sum / arr.length;
  return mean;
}

function getQuantile(arr, p) {
  if (arr.length == 1){
    return arr[0]
  }else{
    // sort the array
    let arr_sort = arr.sort(function (a, b) {
      return a - b;
    });
    index = (arr.length - 1) * p;
    integer = Math.floor(index);
    fraction = index - integer;
    value =
      arr_sort[integer] + (arr_sort[integer + 1] - arr_sort[integer]) * fraction;
    return value;
  }
}

function getVariance(arr) {
  let variance = getMean(arr.map((x) => Math.pow(x - getMean(arr), 2)));
  let sd = Math.sqrt(variance);
  return {variance: variance, sd: sd};
}

function getDescription(arr) {
  let ans_description = new Object();
  let title_names = ['max', 'min', 'mean', 'median', 'Q1', 'Q3', 'variance', 'sd'];
  title_names.map((x) => (ans_description[x] = null));

  if (arr.length > 0) {
    ans_description.max = Math.max.apply(null, arr);
    ans_description.min = Math.min.apply(null, arr);
    ans_description.mean = getMean(arr);
    ans_description.median = getQuantile(arr, 0.5);
    ans_description.Q1 = getQuantile(arr, 0.25);
    ans_description.Q3 = getQuantile(arr, 0.75);
    ans_description.variance = getVariance(arr).variance;
    ans_description.sd = getVariance(arr).sd;
  }
  return ans_description;
}

// let test_array = [1, 2, 3, 4, 8, 5, 60, 112];
let test_array = [];
console.log(getDescription(test_array));
