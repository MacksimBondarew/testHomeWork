function joinTest(arr, separator = ',') {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    if (i > 0) str += separator;

    const item = arr[i];
    str += item === null || item === undefined ? '' : item;
  }

  return str;
}


console.log(joinTest(["1", "2", "3"], ", ")); // "1, 2, 3"
console.log(joinTest([1, 2, 3]));              // "1,2,3"
console.log(joinTest([1, 2, 3], ""));          // "123"
console.log(joinTest([1, null, undefined, 2], "-")); // "1---2"
console.log(joinTest([]));                     // ""
console.log(joinTest(["one"], ", "));          // "one"
console.log(joinTest([1, [2, 3]], " | "));     // "1 | 2,3" — как у нативного