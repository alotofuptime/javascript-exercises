/**
 * SEQUENCE
 *  SET lowerCaseStr to string.toLowerCase()
 *  SET parsedStr to lowerCaseStr.replaceAll() with regex /[!.,]/g, ''
 *  SET revStr to CALL lowerCaseStr.split('').reverse().join('')
 *  RETURN parsedStr === lowerCaseStr
 */
const palindromes = function (string) {
  lowerCaseStr = string.toLowerCase();
  const parsedStr = lowerCaseStr.replaceAll(/[!.,\s]/g, "");
  const revStr = parsedStr.split("").reverse().join("");
  return parsedStr === revStr;
};

// Do not edit below this line
module.exports = palindromes;
