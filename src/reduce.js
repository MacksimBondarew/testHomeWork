function myReduce(arr, callback, initialValue) {
  let startValue = initialValue;
  let notValue = initialValue === undefined || initialValue === null;
  if (notValue) {
    startValue = arr[0];
  }
  for (let i = notValue ? 1 : 0; i < arr.length; i++) {
    let completeFunction;
    completeFunction = callback(startValue, arr[i], i, arr);
    startValue = completeFunction;
  }
  return startValue;
}

// ===== Tests =====

console.log(myReduce([1, 2, 3, 4], (acc, cur) => acc + cur, 0));
// 10

// sum without initial value (first element becomes acc)
console.log(myReduce([1, 2, 3, 4], (acc, cur) => acc + cur));
// 10

// max value
console.log(myReduce([5, 1, 9, 3], (acc, cur) => (cur > acc ? cur : acc)));
// 9

// array → object
console.log(
  myReduce(
    ['a', 'b', 'a'],
    (acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    },
    {},
  ),
);
// { a: 2, b: 1 }

// callback gets index and array too
console.log(myReduce([10, 20, 30], (acc, cur, index, array) => acc + index, 0));
// 3

// single element, no initial value → callback is not called
console.log(myReduce([42], (acc, cur) => acc + cur));
// 42

// empty array WITH initial value
console.log(myReduce([], (acc, cur) => acc + cur, 100));
// 100

// empty array WITHOUT initial value → error
try {
  myReduce([], (acc, cur) => acc + cur);
} catch (e) {
  console.log(e.message);
}