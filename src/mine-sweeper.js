const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  let raw = [];
  let sum = 0;
  let numRaw = [];
  let numMatrix = [];
  for (let t = 0; t < matrix.length; t++) {
    numRaw = matrix[t].map((value) => value ? 1 : 0);
    numMatrix.push(numRaw)
    numRaw = [];
  }
  for (let i = 0; i < numMatrix.length; i++) {
    for (let j = 0; j < numMatrix[i].length; j++) {
      if (i - 1 >= 0) {
        sum = numMatrix[i - 1][j];
        if (j - 1 >= 0) {
          sum = sum + numMatrix[i - 1][j - 1];
        }
        if (j + 1 < numMatrix[i].length) {
          sum = sum + numMatrix[i - 1][j + 1];
        }
      }
      if (j - 1 >= 0) {
        sum = sum + numMatrix[i][j - 1];
      }
      if (j + 1 < numMatrix[i].length) {
        sum = sum + numMatrix[i][j + 1];
      }
      if (i + 1 < numMatrix.length) {
        sum = sum + numMatrix[i + 1][j];
        if (j - 1 >= 0) {
          sum = sum + numMatrix[i + 1][j - 1]
        }
        if (j + 1 < numMatrix[i].length) {
          sum = sum + numMatrix[i + 1][j + 1];
        }
      }
      raw.push(sum);
      sum = 0;
    }
    res.push(raw);
    raw = [];
  }
  return res;
}

module.exports = {
  minesweeper
};
