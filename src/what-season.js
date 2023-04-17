const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if (!date)
    return 'Unable to determine the time of year!'
  if ((Object.prototype.toString.call(date) === "[object Date]")&&(Object.getOwnPropertyNames(date).length===0)) {
  const seasons = ['winter', 'spring', 'summer', 'autumn (fall)'];
  const months = [0, 1, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return seasons[Math.floor(months.indexOf(date.getMonth())/3)];
  } else     
  throw new Error('Invalid date!')
}

module.exports = {
  getSeason
};
