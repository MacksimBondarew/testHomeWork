function radixSort(arr) {
  let a = [...arr];

  // КРОК 1: найбільше число визначає, скільки буде проходів
  let max = a[0];
  for (const x of a) if (x > max) max = x;

  // КРОК 2: один прохід на кожен розряд (exp = 1, 10, 100, ...)
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    const buckets = Array.from({ length: 10 }, () => []); // 10 відер: цифри 0–9

    for (const x of a) {
      const digit = Math.floor(x / exp) % 10; // потрібна цифра числа
      buckets[digit].push(x);
    }

    a = buckets.flat(); // склеюємо по порядку відер
  }
  return a;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));