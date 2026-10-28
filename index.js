/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let sum = 0;

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") {
      return;
    }
    grid[i][j] = "0";
    // console.log("@@@", i, j);
    dfs(i - 1, j);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i, j + 1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        sum++;
        dfs(i, j);
      }
    }
  }
  return sum;
};

console.log(
  "@@@",
  numIslands([
    ["1", "1"],
    ["1", "1"],
  ]),
);
