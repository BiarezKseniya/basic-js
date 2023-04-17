const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
 let count = 0;
 let sorted = arr.filter((number) => {return !(number===-1)}).sort((a, b) => {
    return a - b;
  })
  let result = arr.map((element, index) => {
    if (element===-1) {
      count++
      return element
    } else {
      return sorted[index-count];
    }

  })
  return result;
}

console.log(sortByHeight([4, 2, 9, 11, 2, 16]))

module.exports = {
  sortByHeight
};
