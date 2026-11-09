// function findNearestCityIndex(distances, x) {
//   let left = 0;
//   let right = distances.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (distances[mid] === x) return mid;
//     if (distances[mid] < x) left = mid + 1;
//     else right = mid - 1;
//   }
//   console.log(right, left)
//   return (distances[right] - x) < (distances[left] - x) ? right : left
// }

// function findNearestCityIndex(distances, x) {
//   let index = 0;
//   for (let i = 1; i < distances.length; i++) {
//     if (Math.abs(distances[i] - x) < Math.abs(distances[index] - x)) {
//       index = i;
//     }
//   }
//   return index;
// }

// // Пример использования:
// const distances = [10, 20, 30, 40, 50, 60, 70];
// const x = 30;
//
// console.log(findNearestCityIndex(distances, 35));
// const nearestIndex = findNearestCityIndex(distances, x);
//
// console.log('Индекс ближайшего города:', nearestIndex); //

// Ожидаемый результат: 2 (расстояние 30 находится ближе к 35)

// const ads = [
//   { name: 'ad1', price: 1.8, show: 0 },
//   { name: 'ad2', price: 1.55, show: 0 },
//   { name: 'ad3', price: 1.13, show: 0 },
//   { name: 'ad4', price: 0.48, show: 0 },
// ];
//
// function spreadTrafficEvenly(banners) {
//   let server = banners[0]
//   for (let b of banners) {
//     if (server.show > b.show) server = b;
//   }
//   return server.show = server.show + 1;
// }
//
// function spreadTrafficRandom(banners) {
//   const randomServer = Math.floor(Math.random() * banners.length);
//   return (banners[randomServer].show = banners[randomServer].show + 1);
// }
//
// for(let i = 0; i < 1000000; i++) {
//   spreadTrafficRandom(ads);
// }
//
// console.log(ads)
//
// // [
// //    { name: 'ad1', price: 1.8, show: 250000 },
// //    { name: 'ad2', price: 1.55, show: 250000 },
// //    { name: 'ad3', price: 1.13, show: 250000 },
// //    { name: 'ad4', price: 0.48, show: 250000 },
//];

const ads = [
  { name: 'ad1', price: 1.8, show: 0 },
  { name: 'ad2', price: 1.55, show: 0 },
  { name: 'ad3', price: 1.13, show: 0 },
  { name: 'ad4', price: 0.48, show: 0 },
];

function spreadTrafficByPrice(banners) {
    let server = banners[0]

    for (let b of banners) {
      if (server.show / server.price > b.show / b.price) {
        server = b;
      }
    }
    return server.show++;
}

for (let i = 0; i < 1000000; i++) {
  spreadTrafficByPrice(ads);
}

console.log(ads);

// Чем выше цена тем больше трафика получит баннер
//
// В данном случае
// 1.8$ = 36% трафика
// 1.55$ = 31% трафика
// 1.13$ = 23%
//   0.48$ = 10%

// bubble
// selection
// insetrion
// merge
// heapSort
// quickSort
// bucketSort
// countSort
// radixSort
// timSort

