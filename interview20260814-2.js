// 字节od手撕代码2

/*
给到一个JSON对象，定义它的最大深度是：
1. 如果JSON是个原始值对象，那么深度是1
2. 如果是个数组，则是它所有元素深度的最大值 +1
3. 如果是个对象，则是它所有值深度的最大值 +1

例子：
// 1, "depth", true, null, {}, [] => 1

// [1, 2, 3, [2], 1] => 3

// {"test": 123} => 2

console.log("@@@", maxDeep(1)); // 1
*/
// 相关函数: typeof Object.values .keys .entries Array.isArray

function maxDeep(obj) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    Object.values(obj).length === 0
  ) {
    return 1;
  }

  let max = 0;
  for (let child of Object.values(obj)) {
    max = Math.max(max, maxDeep(child));
  }

  return max + 1;
}

console.log("@@@", maxDeep(1)); // 1
console.log("@@@", maxDeep("depth")); // 1
console.log("@@@", maxDeep(true)); // 1
console.log("@@@", maxDeep(null)); // 1
console.log("@@@", maxDeep({})); // 1
console.log("@@@", maxDeep([])); // 1
console.log("@@@", maxDeep({ test: 123 })); // 2
console.log("@@@", maxDeep([1, 2, 3])); // 2
console.log("@@@", maxDeep({ test: [1, 2, 3] })); // 3
console.log("@@@", maxDeep([1, 2, 3, [2], 1])); // 3
console.log("@@@", maxDeep({ test: [1, 2, [3]] })); // 4
console.log("@@@", maxDeep([1, 2, 3, [2, [5, 6, 7]], 1])); // 4
