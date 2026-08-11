/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let len = nums.length;
  let used = Array(len).fill(false);
  let arr = [];

  function backtrack() {
    if (arr.length === len) {
      res.push([...arr]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) {
        continue;
      }
      used[i] = true;
      arr.push(nums[i]);
      backtrack();
      used[i] = false;
      arr.pop();
    }
  }

  backtrack();
  return res;
};
