function heapSort(arr) {
  const n = arr.length;

  // 1. Строим max-heap (с последнего родителя до корня)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
    console.log(arr);
  }

  // 2. Снимаем максимум в конец и чиним кучу
  for (let end = n - 1; end > 0; end--) {
    [arr[0], arr[end]] = [arr[end], arr[0]];
    heapify(arr, end, 0);
  }

  return arr;
}

function heapify(arr, size, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < size && arr[left] > arr[largest]) largest = left;
  if (right < size && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, size, largest);
  }
}

console.log(heapSort([5, 3, 8, 1, 9, 2, 7]));
