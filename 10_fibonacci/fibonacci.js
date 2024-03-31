/**
 * CONSTRAINTS
 *  ! Does not accept negative integers
 *  * Accepts integers in string format
 *  * 0th fibonacci number returns 0
 * ------------------------------------
 * @param n: integer greater than 0 (may be in string format)
 * @returns [integer | string (error message)]
 *
 * SEQUENCE
 *  SET nthFib to CALL Number() with n
 *  IF nthFib is less than 0 THEN
 *    RETURN 'OOPS'
 *  ELSE IF nthFib is equal to 0 THEN
 *    RETURN 0
 *  ELSE IF nthFib is equal to 1 or nthFib is equal to 2 THEN
 *    RETURN 1
 *  END IF
 *  RETURN CALL fibonacci() with n-1 + fibonacci() with n-2
 */
const fibonacci = function (n) {
  const nthFib = Number(n);

  if (nthFib < 0) return "OOPS";
  if (nthFib === 0) return 0;
  if (nthFib === 1 || nthFib === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
