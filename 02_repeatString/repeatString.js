/**
 * SEQUENCE
 * SET 2 params string and num
 * SET str to an empty string
 * IF string is equal to an empty string
 * THEN RETURN str
 * END IF
 * IF num is a negative number
 * THEN return 'ERROR'
 * END IF
 * WHILE num is greater than 0
 * SET str to str + string
 * DECREMENT num
 * END WHILE
 * RETURN str
 **/
const repeatString = function (string, num) {
  let repeatedStr = "";

  if (string === repeatedStr) return repeatedStr;
  if (num < 0) return "ERROR";

  while (num > 0) {
    repeatedStr += string;
    num--;
  }

  return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
