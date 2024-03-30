/**
 * SET PARAM to string
 * SEQUENCE
 * IF string is empty
 *    THEN RETURN string
 * END IF
 * SET chars to CALL string.split() with empty string
 * SET backPtr to length of chars array minus 1
 * SET midIndex to length of chars array divided by 2
 * FOR
 *    INT frontPtr to 0
 *    COND frontPtr is less than midIndex
 *    FINAL INCREMENT frontPtr
 *   SEQUENCE
 *   SET letter in chars array at frontPtr to letter in chars array at backPtr
 *   DECREMENT backPtr
 *   END SEQUENCE
 * END FOR
 * RETURN CALL chars.join() with empty string
 * END SEQUENCE
 */

// I wanted to solve this without using the Array.prototype.reverse() method
const reverseString = function (string) {
  if (string === "") return "";

  const chars = string.split("");
  const midIndex = chars.length / 2;
  let backPtr = chars.length - 1;

  for (let frontPtr = 0; frontPtr < midIndex; frontPtr++) {
    [chars[frontPtr], chars[backPtr]] = [chars[backPtr], chars[frontPtr]];
    backPtr--;
  }

  return chars.join("");
};

// Do not edit below this line
module.exports = reverseString;
