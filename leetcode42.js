/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftMax = Array(height.length).fill(0);
  let rightMax = Array(height.length).fill(0);
  let max = 0;
  for (let i = 1; i < height.length; i++) {
    max = Math.max(max, height[i - 1]);
    leftMax[i] = max;
  }
  max = 0;
  for (let i = height.length - 2; i >= 0; i--) {
    max = Math.max(max, height[i + 1]);
    rightMax[i] = max;
  }
  let sum = 0;
  for (let i = 1; i < height.length; i++) {
    let cur = Math.min(leftMax[i], rightMax[i]) - height[i];
    cur = Math.max(0, cur);
    sum += cur;
  }
  return sum;
};

console.log("@@@", trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log("@@@", trap([4, 2, 0, 3, 2, 5])); // 9
console.log("@@@", trap([1])); // 0
console.log("@@@", trap([2, 1, 2])); // 1
console.log("@@@", trap([1, 2, 3])); // 0
