/**
 * SET PARAMS arr, ...args
 * SEQUENCE
 *    RETURN CALL arr.filter() with filter that eliminates values in args array from arr
 * END SEQUENCE
 */

const removeFromArray = function (arr, ...args) {
  return arr.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
