export const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const midFloor = Math.floor((left + right) / 2);
    if (arr[midFloor] === target) return midFloor;
    if (arr[midFloor] < target) left = midFloor + 1;
    else right = midFloor - 1;
  }
  return -1;
}

const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log(binarySearch(arr, 23));
console.log(binarySearch(arr, 7));

// can be only with sorted array
// binary search for different data

function binarySearchData(arr, target, compare = (a, b) => a < b ? -1 : a > b ? 1 : 0) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const midFloor = Math.floor((left + right) / 2);
    const c = compare(arr[midFloor], target);
    if (c === 0) return midFloor;
    if (c < 0) left = midFloor + 1;
    else right = midFloor - 1;
  }
  return -1;
}

const names = ['Anna', 'Danylo', 'Illia', 'Maksym', 'Olena', 'Taras'];
console.log('Рядки:', binarySearchData(names, 'Maksym'));

const users = [{ id: 3, name: "Anna" }, { id: 7, name: "Illia" }, { id: 12, name: "Maksym" }, { id: 20, name: "Taras" }];
const i = binarySearchData(users, 12, (u, id) => u.id - id);
console.log("Об'єкти:", i, users[i]);

const dates = ["2026-01-05", "2026-03-10", "2026-10-31", "2026-12-24"].map(d => new Date(d));
console.log("Дати:", binarySearchData(dates, new Date("2026-10-31"), (a, b) => a - b));

function findFirstFrom(events, fromDate) {
  const target = new Date(fromDate).getTime();
  let left = 0;
  let right = events.length - 1;
  let ans = -1;

  while (left <= right) {
    const midFloor = Math.floor((left + right) / 2);
    const midTime = new Date(events[midFloor].date).getTime();

    if (midTime >= target) {
      ans = midFloor;
      right = midFloor - 1;
    } else {
      left = midFloor + 1;
    }
  }
  return ans;
}


const events = [
  { title: 'Kolokwium JS', date: '2026-10-05T08:00:00+00:00' },
  { title: 'Egzamin staż', date: '2026-10-19T14:30:00+00:00' },
  { title: 'Projekt ML 1', date: '2026-10-30T22:59:00+00:00' },
  { title: 'Egzamin staż', date: '2026-11-02T14:30:00+00:00' },
  { title: 'Projekt ML 2', date: '2026-11-27T22:59:00+00:00' },
  { title: 'Wigilia', date: '2026-12-24T17:00:00+00:00' },
];

const tests = [
  ['2026-10-31T00:00:00+00:00', 3],
  ['2026-10-30T22:59:00+00:00', 2],
  ['2026-01-01T00:00:00+00:00', 0],
  ['2027-01-01T00:00:00+00:00', -1],
  ['2026-10-31T00:59:00+02:00', 2],
];

for (const [q, exp] of tests) {
  const r = findFirstFrom(events, q);
  console.log(r === exp ? '✅' : '❌', q, '→', r, '(очікується', exp + ')');
}
console.log(
  findFirstFrom([], '2026-10-31') === -1
    ? '✅ порожній масив'
    : '❌ порожній масив',
);