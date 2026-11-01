function selectionSort(arr, compare = (a, b) => (a < b ? -1 : a > b ? 1 : 0)) {
  const a = [...arr];

  for (let i = 0; i < a.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < a.length; j++) {
      if (compare(a[j], a[minIndex]) < 0) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [a[i], a[minIndex]] = [a[minIndex], a[i]];
    }
  }
  return a;
}

console.log(selectionSort([5, 3, 8, 1, 4])); // [ 1, 3, 4, 5, 8 ]
