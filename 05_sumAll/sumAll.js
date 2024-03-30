/**
 * SET PARAMS int1 int2
 * SEQUENCE
 *    SET negativeArgs to boolean expression: int1 is less than 0 or int2 is less than 0
 *    SET invalidArgs to boolean expression: int1 is not a number or int2 is not a number
 *
 *    IF negativeArgs OR invalidArgs THEN
 *      RETURN error message
 *    END IF
 *
 *    SET start to the smaller number between int1 and int2
 *    SET end to the larger number between int1 and int2
 *    SET sum to 0
 *
 *    FOR
 *      INT
 *      COND start is less than or equal to end
 *      FINAL INCREMENT start by 1
 *
 *      SEQUENCE
 *        SET sum to sum + start
 *      END SEQUENCE
 *    END FOR
 *
 *    RETURN sum
 * END SEQUENCE
 */

const sumAll = function (int1, int2) {
  const negativeArgs = int1 < 0 || int2 < 0;
  const invalidArgs = typeof int1 !== "number" || typeof int2 !== "number";

  if (negativeArgs || invalidArgs) {
    return "ERROR";
  }

  let sum = 0;
  let start = int1 < int2 ? int1 : int2;
  const end = int1 > int2 ? int1 : int2;

  for (; start <= end; start++) {
    sum += start;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
