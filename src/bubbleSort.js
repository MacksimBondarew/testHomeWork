function bubbleSort(arr) {
  const a = [...arr]; // копія, щоб не змінювати оригінал

  for (let i = 0; i < a.length - 1; i++) {
    // скільки проходів
    let swapped = false;

    for (let j = 0; j < a.length - 1 - i; j++) {
      // -i: останні i елементів уже на місці
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]; // обмін сусідів
        swapped = true;
      }
    }

    if (!swapped) break; // обмінів не було, отже масив уже відсортований
  }
  return a;
}

console.log(bubbleSort([5, 3, 8, 3, 1, 4])); // [ 1, 3, 4, 5, 8 ]
