// Зливає два ВІДСОРТОВАНІ масиви в один відсортований
function merge(left, right, compare) {
  const result = [];
  let i = 0, j = 0; // вказівники: i по left, j по right

  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j]) <= 0) {
      result.push(left[i++]); // менший зліва
      console.log(result);
    }
    else {
      result.push(right[j++]);
      console.log(result)
    } // менший справа
  }

  while (i < left.length) {
    result.push(left[i++]);
    console.log(result)
  } // докидаємо залишки
  while (j < right.length) {
    result.push(right[j++]);
    console.log(result)
  }
  return result;
}

function mergeSort(arr, compare = (a, b) => (a < b ? -1 : a > b ? 1 : 0)) {
  if (arr.length <= 1) return arr; // базовий випадок: 0 або 1 елемент

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), compare);
  const right = mergeSort(arr.slice(mid), compare);

  return merge(left, right, compare); // зливаємо
}

console.log(mergeSort([5, 3, 8, 1, 4])); // [ 1, 3, 4, 5, 8 ]
