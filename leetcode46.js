var permute = function (nums) {
  let arr = [];
  let res = [];
  let used = Array(nums.length).fill(false);
  function dfs() {
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
      dfs();
      arr.pop();
      used[i] = false;
    }
  }
  dfs();
  return res;
};

console.log("@@@", permute([2]));
console.log("@@@", permute([2, 3]));
console.log("@@@", permute([2, 3, 4]));
console.log("@@@", permute([-5]));
console.log("@@@", permute([-5, -10]));
