function findNearestCityIndex(distances, x) {
  let left = 0;
  let right = distances.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (distances[mid] === x) return mid;
    if (distances[mid] < x) left = mid + 1;
    else right = mid - 1;
  }
}

// Пример использования:
const distances = [10, 20, 30, 40, 50, 60, 70];
const x = 30;

const nearestIndex = findNearestCityIndex(distances, x);

console.log("Индекс ближайшего города:", nearestIndex); //

// Ожидаемый результат: 2 (расстояние 30 находится ближе к 35)