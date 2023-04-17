const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let object = {};
  let domain = '';
  let temp = [...domains];
  let count = 0;
  let searchVal = '';
  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i].split('.');
  }
  for (let t = 0; t < temp.length; t++) {
    for (let j = temp[t].length - 1; j >= 0; j--) {
        if (j === temp[t].length - 1)
        searchVal = temp[t][j] + searchVal;
        else
        searchVal = temp[t][j]+ '.' + searchVal;
        domain = domain + '.' + temp[t][j];
      if (!object.hasOwnProperty(domain)) {
        count = domains.filter((str) => {
          return str.includes(searchVal);
        }).length
        object[domain] = count;
      }
      count = 0;
    }
    domain = '';
    searchVal = '';
  }
  return object;
}

getDNSStats([
  'epam.com',
  ])

module.exports = {
  getDNSStats
};
