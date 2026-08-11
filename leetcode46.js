/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let arr = [];
  let used = Array(nums.length).fill(false);
  let res = [];
  function backtrack() {
    if (arr.length === nums.length) {
      res.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      arr.push(nums[i]);
      used[i] = true;
      backtrack();
      arr.pop();
      used[i] = false;
    }
  }

  backtrack();
  return res;
};

console.log("@@@", permute([1, 2, 3]));
