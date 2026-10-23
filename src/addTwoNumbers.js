var addTwoNumbers = function (l1, l2) {
  let result = [];
  let enough = 0;
  let maxArray = Math.max(l1.length, l2.length);
  for (let i = maxArray - 1; i >= 0; i--) {
    if (l1[i] + l2[i] > 9) {
      enough += 1;
      result = [l1[i] + l2[i] - 10, ...result];
    } else {
      result = [(l1[i] ?? 0) + (l2[i] ?? 0) + enough, ...result];
      enough = 0
    }
  }
  return result;
};

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
