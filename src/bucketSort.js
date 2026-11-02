import { insertionSort } from './insertionSort.js';

function bucketSort(arr, bucketCount = arr.length) {
  // КРОК 1
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // КРОК 2
  const buckets = Array.from({ length: bucketCount }, () => []);
  console.log(buckets);
  const range = (max - min) / bucketCount;

  // КРОК 3
  for (const x of arr) {
    let idx = Math.floor((x - min) / range);
    if (idx === bucketCount) idx--;
    buckets[idx].push(x);
  }

  // КРОК 4
  for (const b of buckets) insertionSort(b);

  // КРОК 5
  return buckets.flat();
}

bucketSort([27, 3, 45, 0, 38, 12, 50, 19]);