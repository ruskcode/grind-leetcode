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
*/

// 相关函数: typeof Object.values .keys .entries Array.isArray

function maxDeep(parent) {
  if (parent === null || typeof parent !== "object") {
    return 1;
  }

  let values = Object.values(parent);
  if (values.length === 0) {
    return 1;
  }

  let childMax = 0;
  for (let child of values) {
    childMax = Math.max(childMax, maxDeep(child));
  }

  return childMax + 1;
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
console.log("@@@", maxDeep([1, 2, [3, 4, 5]])); // 3
console.log("@@@", maxDeep({ test: [1, 2, [3, 4, 5]] })); // 4
console.log("@@@", maxDeep([1, 2, [[1, 2, 3], 4, 5]])); // 4
