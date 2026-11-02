function countingSort(arr) {
  if (arr.length <= 1) return [...arr];

  // КРОК 1: min і max
  let min = arr[0],
    max = arr[0];
  for (const x of arr) {
    if (x < min) min = x;
    if (x > max) max = x;
  }

  // КРОК 2: масив лічильників, по одній комірці на кожне можливе число
  const count = new Array(max - min + 1).fill(0);

  // КРОК 3: рахуємо
  for (const x of arr) count[x - min]++;

  // КРОК 4: виписуємо по порядку
  const result = [];
  for (let i = 0; i < count.length; i++) {
    for (let k = 0; k < count[i]; k++) result.push(i + min);
  }
  return result;
}

console.log(countingSort([7, 3, 5, 3, 9, 4]));
