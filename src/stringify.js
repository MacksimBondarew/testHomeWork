function myStringify(value) {
  const typeOfValue = typeof value;
  if (
    typeOfValue === "undefined" ||
    typeOfValue === 'symbol' ||
    typeOfValue === 'function'
  ) {
    return undefined;
  }
  if (Number.isNaN(value)) {
    return "null";
  }
  if (value === null) return 'null';
  if (typeof value === 'number') {
    return Number.isFinite(value) ? String(value) : 'null';
  }
  if (typeof value === 'boolean') {
    return String(value);
  }
  if (typeof value === 'string') {
    const escaped = value
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n');
    return '"' + escaped + '"';
  }
  if (Array.isArray(value)) {
    let result = '[';
    for (let i = 0; i < value.length; i++) {
      const item = myStringify(value[i]);
      result += item === undefined ? 'null' : item;
      if (i < value.length - 1) result += ',';
    }
    return result + ']';
  }
  let result = '{';
  let first = true;
  for (const key in value) {
    const item = myStringify(value[key]);
    if (item === undefined) continue;
    if (!first) result += ',';
    result += '"' + key + '":' + item;
    first = false;
  }
  return result + '}';
}

// ===== Тести для myStringify =====

// примітиви
console.log(myStringify(42));          // 42
console.log(myStringify(-7.5));        // -7.5
console.log(myStringify('hello'));     // "hello"
console.log(myStringify(''));          // ""
console.log(myStringify(true));        // true
console.log(myStringify(false));       // false
console.log(myStringify(null));        // null

// спеціальні числа → null
console.log(myStringify(NaN));         // null
console.log(myStringify(Infinity));    // null
console.log(myStringify(-Infinity));   // null

// undefined, функції, символи → undefined
console.log(myStringify(undefined));   // undefined
console.log(myStringify(() => {}));    // undefined
console.log(myStringify(Symbol('x'))); // undefined

// масиви
console.log(myStringify([1, 'a', true, null]));          // [1,"a",true,null]
console.log(myStringify([1, undefined, () => {}, Symbol('s')])); // [1,null,null,null]
console.log(myStringify([NaN, Infinity]));               // [null,null]
console.log(myStringify([[1, 2], [3, [4]]]));            // [[1,2],[3,[4]]]

// об'єкти
console.log(myStringify({ name: 'Maksym', age: 20 }));   // {"name":"Maksym","age":20}
console.log(myStringify({ a: 1, b: undefined, c: () => {}, d: Symbol('s') })); // {"a":1}
console.log(myStringify({ a: null, b: NaN }));           // {"a":null,"b":null}
console.log(myStringify({ only: undefined }));           // {}

// вкладені
console.log(myStringify({ user: { name: 'Anna', tags: ['a', 'b'] }, list: [[1], { x: 2 }] }));
// {"user":{"name":"Anna","tags":["a","b"]},"list":[[1],{"x":2}]}

// порожні
console.log(myStringify({}));          // {}
console.log(myStringify([]));          // []

// ===== Автоперевірка проти справжнього JSON.stringify =====
const cases = [
  42, -7.5, 'hello', '', true, false, null,
  NaN, Infinity, -Infinity,
  undefined, () => {}, Symbol('x'),
  'say "hi"', 'a\nb', 'C:\\path',
  [1, 'a', true, null],
  [1, undefined, () => {}, Symbol('s')],
  [NaN, Infinity],
  [[1, 2], [3, [4]]],
  { name: 'Maksym', age: 20 },
  { a: 1, b: undefined, c: () => {}, d: Symbol('s') },
  { a: null, b: NaN },
  { only: undefined },
  { user: { name: 'Anna', tags: ['a', 'b'] }, list: [[1], { x: 2 }] },
  {}, [],
];

let passed = 0;
cases.forEach((c, i) => {
  const mine = myStringify(c);
  const real = JSON.stringify(c);
  const ok = mine === real;
  if (ok) passed++;
  console.log(`${i + 1}: ${ok ? '✅' : '❌'}  mine=${mine}  real=${real}`);
});
console.log(`\nПройдено: ${passed} / ${cases.length}`);
