function show(arr, hole) {
  return '[' + arr.map((v, k) => (k === hole ? '_' : v)).join(', ') + ']';
}

function shellSort(arr) {
  const n = arr.length;
  console.log(`Старт: ${show(arr, -1)}`);

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    console.log(`\n===== gap = ${gap} =====`);

    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      console.log(`i = ${i}: берём ${temp} в руку → ${show(arr, i)}`);

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        console.log(`  ${arr[j]} > ${temp}, сдвигаем → ${show(arr, j - gap)}`);
        j -= gap;
      }

      if (j >= gap) console.log(`  ${arr[j - gap]} > ${temp}? нет, стоп`);
      else console.log(`  прыгать некуда, стоп`);

      arr[j] = temp;
      console.log(`  ставим ${temp} → ${show(arr, -1)}`);
    }

    console.log(`Итог gap = ${gap}: ${show(arr, -1)}`);
  }

  return arr;
}

shellSort([8, 5, 3, 7, 6, 2, 4, 1]);
