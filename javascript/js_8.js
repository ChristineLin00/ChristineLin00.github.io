let input_list = ['Dog', 'cat', 'Giraffe', 'gorilla', 'dog', 'parrot', 'doG', 'giraFFe', 'Cat'];
// compare output and input
function getUnique_insensitive(arr) {
  var ouput_list = [];
  for (i = 0; i < arr.length; i++) {
    regex = new RegExp(arr[i], 'i');
    if (ouput_list.findIndex((x) => regex.test(x)) === -1 && arr[i] !== "") {
      ouput_list.push(arr[i]);
    }
  }
  return ouput_list;
}

console.log(getUnique_insensitive(input_list));

// delete the duplicated data
function getUnique_insensitive2(arr) {
  var i = 1;
  while(arr[i]) {
    regex = new RegExp(arr[i], 'i');
    if (arr.slice(0, i).findIndex((x) => regex.test(x)) !== -1) {
      arr.splice(i, 1);
      i = i - 1;
    }
    i ++;
  }
  return arr;
}

console.log(getUnique_insensitive2(input_list));

// from Alwin
function getGroup(arr) {
  let groups = {};
  arr.forEach((item, index) => {
    let lowcase = item.toLowerCase();
    groups[lowcase] = groups[lowcase] || [];
    groups[lowcase].push(item);
  });
  return Object.entries(groups).map(([key, value]) => (value[0]));
}

console.log(getGroup(input_list));
