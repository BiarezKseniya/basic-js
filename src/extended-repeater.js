const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionString = '';
  if (!options.hasOwnProperty("repeatTimes")) {
    options.repeatTimes = 1;
  }
  if (!options.hasOwnProperty("additionRepeatTimes")) {
    options.additionRepeatTimes = 1;
  }
  if (!options.hasOwnProperty("separator")) {
    options.separator = '+';
  }
  if (!options.hasOwnProperty("additionSeparator")) {
    options.additionSeparator = '|';
  }
  if (options.hasOwnProperty("addition")) {
    additionString = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
    additionString = additionString.slice(0, additionString.length - options.additionSeparator.length);
  }
  let newStr = (str + additionString + options.separator).repeat(options.repeatTimes);
  newStr = newStr.slice(0, newStr.length - options.separator.length);
  return newStr;
}

console.log(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }))

module.exports = {
  repeater
};
