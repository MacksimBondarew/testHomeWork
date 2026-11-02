function insertionSort(a, left, right) {
  // сортує шматок a[left..right]
  for (let i = left + 1; i <= right; i++) {
    const cur = a[i];
    let j = i - 1;
    while (j >= left && a[j] > cur) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = cur;
  }
}

function merge(a, left, mid, right) {
  // зливає a[left..mid] і a[mid+1..right]
  const L = a.slice(left, mid + 1),
    R = a.slice(mid + 1, right + 1);
  let i = 0,
    j = 0,
    k = left;
  while (i < L.length && j < R.length) a[k++] = L[i] <= R[j] ? L[i++] : R[j++];
  while (i < L.length) a[k++] = L[i++];
  while (j < R.length) a[k++] = R[j++];
}

function timSort(arr, RUN = 32) {
  const a = [...arr],
    n = a.length;

  // ФАЗА 1: ділимо на шматки по RUN і сортуємо кожен insertion sort
  for (let start = 0; start < n; start += RUN) {
    const end = Math.min(start + RUN - 1, n - 1);
    insertionSort(a, start, end);
  }

  // ФАЗА 2: зливаємо сусідні шматки, щоразу подвоюючи розмір
  for (let size = RUN; size < n; size *= 2) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);
      if (mid < right) merge(a, left, mid, right);
    }
  }
  return a;
}
