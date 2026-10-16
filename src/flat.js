function myFlat(arr, depth = 1) {
  let copy = [...arr];

  for (let d = 0; d < depth; d++) {
    let next = [];
    let hasArray = false;

    for (let i = 0; i < copy.length; i++) {
      if (Array.isArray(copy[i])) {
        next = [...next, ...copy[i]];
        hasArray = true;
      } else {
        next = [...next, copy[i]];
      }
    }

    copy = next;

    if (!hasArray) break;
  }

  return copy;
}

// ===== Проверка =====
console.log(myFlat([1, 2, [3, 4]]));
// [1, 2, 3, 4]

console.log(myFlat([1, [2, [3, [4]]]]));
// [1, 2, [3, [4]]]

console.log(myFlat([1, [2, [3, [4]]]], 2));
// [1, 2, 3, [4]]

console.log(myFlat([1, [2, [3, [4]]]], Infinity));
// [1, 2, 3, 4]

console.log(myFlat([1, [2, 3]], 0));
// [1, [2, 3]]  — глубина 0, ничего не раскрываем

console.log(myFlat([]));
// []

const original = [1, [2, 3]];
myFlat(original);
console.log(original);
// [1, [2, 3]]  — оригинал не должен измениться
