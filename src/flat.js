function myFlat(arr, depth = 1) {
  let copy = [...arr];
  for (let i = 0; i < depth; i++) {
    let next = [];
    let checkArray = false;
    for (let j = 0; j < copy.length; j++) {
      if (Array.isArray(copy[j])) {
        next = [...next, ...copy[j]];
        checkArray = true;
      } else {
        next = [...next, copy[j]]
      }
    }
    copy = next;

    if (!checkArray) {
      break;
    }
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
