function myReduceRight(arr, callback, initialValue) {
  let startValue = initialValue;
  let notValue = initialValue === undefined || initialValue === null;
  if (notValue) {
    startValue = arr[arr.length - 1];
  }
  for (let i = notValue ? arr.length - 2 : arr.length - 1; i >= 0; i--) {
    let completeFunction;
    completeFunction = callback(startValue, arr[i], i, arr);
    startValue = completeFunction;
  }
  return startValue;
}

// ===== Tests =====

// goes from RIGHT to LEFT
console.log(myReduceRight(['a', 'b', 'c'], (acc, cur) => acc + cur, ''));
// 'cba'

// without initial value (LAST element becomes acc)
console.log(myReduceRight(['a', 'b', 'c'], (acc, cur) => acc + cur));
// 'cba'

// sum (order doesn't matter here)
console.log(myReduceRight([1, 2, 3, 4], (acc, cur) => acc + cur, 0));
// 10

// order matters for subtraction
console.log(myReduceRight([1, 2, 3, 4], (acc, cur) => acc - cur));
// -2   (4 - 3 - 2 - 1)

// flatten nested arrays from the end
console.log(
  myReduceRight([[1, 2], [3, 4], [5]], (acc, cur) => acc.concat(cur), []),
);
// [5, 3, 4, 1, 2]

// index goes down: 2, 1, 0
console.log(
  myReduceRight(
    [10, 20, 30],
    (acc, cur, index) => {
      acc.push(index);
      return acc;
    },
    [],
  ),
);
// [2, 1, 0]

// compose functions (classic use case)
const add1 = (x) => x + 1;
const double = (x) => x * 2;
const compose =
  (...fns) =>
  (x) =>
    myReduceRight(fns, (acc, fn) => fn(acc), x);
console.log(compose(add1, double)(5));
// 11   (double first: 10, then add1: 11)

// single element, no initial value → callback is not called
console.log(myReduceRight([42], (acc, cur) => acc + cur));
// 42

// empty array WITH initial value
console.log(myReduceRight([], (acc, cur) => acc + cur, 100));
// 100

// empty array WITHOUT initial value → error
try {
  myReduceRight([], (acc, cur) => acc + cur);
} catch (e) {
  console.log(e.message);
}
// Reduce of empty array with no initial value
