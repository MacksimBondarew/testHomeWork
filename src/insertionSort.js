export function insertionSort(arr, compare = (a, b) => (a < b ? -1 : a > b ? 1 : 0)) {
  const a = [...arr];

  for (let i = 1; i < a.length; i++) {
    const current = a[i];
    let j = i - 1;

    while (j >= 0 && compare(a[j], current) > 0) {
      a[j + 1] = a[j]; // зсуваємо більший елемент вправо
      j--;
    }
    a[j + 1] = current;
  }
  return a;
}

console.log(insertionSort([5, 3, 8, 1, 4])); // [ 1, 3, 4, 5, 8 ]
