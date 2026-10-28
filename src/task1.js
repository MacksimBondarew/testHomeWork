// // function firstNSmallest(array, n) {
// //   const result = [...array];
// //   while (result.length > n) {
// //     const bigNumber = Math.max(...result);
// //     const index = result.lastIndexOf(bigNumber);
// //     result.splice(index, 1);
// //   }
// //   return result;
// // }
// // console.log(firstNSmallest([1, 2, 3, 4, 5], 3)) // [1,2,3]
// // console.log(firstNSmallest([5, 4, 3, 2, 1], 3)); // [3,2,1]
// // console.log(firstNSmallest([1, 2, 3, 1, 2], 3)); // [1,2,1]
// // console.log(firstNSmallest([1, 2, 3, -4, 0], 3)); // [1,-4,0]
// // console.log(firstNSmallest([1, 2, 3, 4, 5], 0)); // []
//
//
const data1 = {
  a: 1,
  x: null,
  k: [1, 2],
  b: 2,
  c: {
    d: 1,
    e: {
      s: {
        f: {
          v: 4
        }
      }
    }
  }
}

const data2 = [{
  a: 1,
  x: null,
  k: [1, 2],
  b: 2,
  c: {
    d: 1,
    e: {
      s: {
        f: {
          v: 4
        }
      }
    }
  }
}];

function cloneNestedData(data) {
  const copy = Array.isArray(data) ? [] : {};
  const originData = [data];
  const copyData = [copy];
  while (originData.length > 0) {
    const origin = originData.pop()
    const target = copyData.pop()

    for (const targetKey in origin) {
      const value = origin[targetKey];
      if (Array.isArray(value)) {
        target[targetKey] = [];
        originData.push(value);
        copyData.push(target[targetKey]);
      } else if (typeof value === 'object' && value !== null) {
        target[targetKey] = {};
        originData.push(value);
        copyData.push(target[targetKey]);
      } else {
        target[targetKey] = value;
      }
      console.log(copyData);

    }
  }
  return copy;
}
//
cloneNestedData(data1);
// cloneNestedData(data2);
// // cloneNestedData(data2);
//
// // Задача клонировать вложенный обьект
// //
// // Запрещено использование JSON, structuredClone, рекурсий
// //
// // Разрешено использовать
// // цикл while и for, array, Map, object
//
// // Test cases:
// console.log(JSON.stringify(cloneNestedData(data1)) === JSON.stringify(data1)); // Expected result: true
// console.log(JSON.stringify(cloneNestedData(data2)) === JSON.stringify(data2)); // Expected result: true
const words = ['hello', 'zelda', 'world', 'its', 'jeka'];

function getSortedString(data) {
  let uniqueWords = words.join("");
  let result = {};
  for (const uniqueWord of uniqueWords) {
    result[uniqueWord.charCodeAt(0)] = uniqueWord;
  }
  return Object.values(result).join("");
}

console.log(getSortedString(words))
//
// написать функцию getSortedString, которая обьединит все слова вру одну строку, выбросит символы дубликаты, отсортиет строку в алфавитном порядке;
//
// результат функции 'adehijklorstwz'
//
// Ограничения:
//   запрещено использовать функцию sort
//
// можно использовать только 1 цикл for, метод join до и после цикла, Set, Object - включая методы получения ключей и значения обьекта