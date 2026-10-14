function sort(arr, compare) {
  let copy = [...arr];
  if (!compare) {
    compare = (a, b) => {
      const strA = String(a);
      const strB = String(b);
      if (strA < strB) return -1;
      if (strA > strB) return 1;
      return 0;
  }
  }
  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy.length; j++) {
      let a = copy[j];
      let b = copy[j + 1];
      console.log(copy);
      if (compare(a, b) > 0) {
        copy[j] = b;
        copy[j + 1] = a;
      }
    }
  }
  return copy;
}

const nums = [10, 1, 5, 100, 2];
// console.log(sort(nums, (a, b) => a - b));
sort(nums, (a, b) => b - a);