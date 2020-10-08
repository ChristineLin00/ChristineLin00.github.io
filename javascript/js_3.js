
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

function getMedian(arr) {
  // sort the array
  let arr_sort = arr.sort(function (a, b) {
    return a - b;
  });
  // odd or even
  if (arr.length % 2 != 0) {
    median = arr_sort[(arr.length - 1) * 0.5];
  } else {
    median =
      (arr_sort[arr.length * 0.5] + arr_sort[arr.length * 0.5 + 1]) * 0.5;
  }
  let Q_1 = arr_sort[Math.round(arr.length * 0.25)];
  let Q_3 = arr_sort[Math.round(arr.length * 0.75)];
  return {median: Math.round(median * 100) / 100, Q1: Q_1, Q3: Q_3 }
}

function getVariance(arr) {
  let variance = getMean(arr.map((x) => Math.pow(x - getMean(arr), 2)));
  let sd = Math.sqrt(variance)
  return {variance: variance, sd: sd}
}

function getDescription(arr) {
  let ans_description = new Object();
  let title_names = ["max", "min", "mean", "median", "Q1", "Q3", "variance", "sd"]
  title_names.map((x) => (ans_description[x] = null));

  if (arr.length > 0) {
    ans_description.max = Math.max.apply(null, arr);
    ans_description.min = Math.min.apply(null, arr);
    ans_description.mean = getMean(arr);
    ans_description.median = getMedian(arr).median;
    ans_description.Q1 = getMedian(arr).Q1;
    ans_description.Q3 = getMedian(arr).Q3;
    ans_description.variance = getVariance(arr).variance;
    ans_description.sd = getVariance(arr).sd;
  }
  return ans_description;
}

// let test_array = [1, 2, 3, 4, 8, 5, 60, 112];
let test_array = [];
console.log(getDescription(test_array));

