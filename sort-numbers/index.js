const numbers = [3, 5, 1, 2];

function sortAscending(a, b) {
  // a The first element for comparison.
  // b The second element for comparison.

  if (a > b) {
    console.log("a=", a, "b=", b);
    return 1;
  }
  if (a == b) {
    console.log("a=", a, "b=", b);
    return 0;
  }
  if (a < b) {
    console.log("a=", a, "b=", b);
    return -1;
  }
}

numbers.sort(sortAscending);

// The process
// a= 5, b= 3, numbers = [3, 5, 1, 2] -> [3, 5, 1, 2]
// a= 1, b= 5, numbers = [3, 5, 1, 2] -> [3, 1, 5, 2]
// a= 1, b= 3, numbers = [3, 1, 5, 2] -> [1, 3, 5, 2]
// a= 2, b= 3, numbers = [1, 3, 5, 2] -> [1, 3, 2, 5]
// a= 2, b= 1, numbers = [1, 3, 2, 5] -> [1, 2, 3, 5]

console.log(numbers);
