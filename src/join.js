function joinTest(array, divider = ",") {
  let str = '';
  if (array.length === 0) return '';
  for (let i = 0; i < array.length; i++) {
    if (i < 1) {
      str = str + array[i];
      continue;
    }
    str += array[i] === null || array[i] === undefined ? divider : divider + array[i];
  }
  return str;
}

console.log(joinTest(['1', '2', '3'], ', ')); // "1, 2, 3"
console.log(joinTest([1, 2, 3])); // "1,2,3"
console.log(joinTest([1, 2, 3], '')); // "123"
console.log(joinTest([1, null, undefined, 2], '-')); // "1---2"
console.log(joinTest([])); // ""
console.log(joinTest(['one'], ', ')); // "one"
console.log(joinTest([1, [2, 3]], ' | ')); // "1 | 2,3" — как у нативного
