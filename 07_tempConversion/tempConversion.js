/**
 * SET PARAM fahrenheit
 *  SEQUENCE
 *    SET celsius to fahrenheit - 32 multiplied by 5 divided by 9
 *    IF the remainder celsius divided by 1 is not equal to 0 THEN
 *      RETURN celsius rounded to 1 decimal place
 *    END IF
 *    RETURN celsius
 *  END SEQUENCE
 */
const convertToCelsius = function (fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;

  if (celsius % 1 !== 0) return parseFloat(celsius.toFixed(1));
  return celsius;
};

/**
 * SET PARAM celsius
 *  SEQUENCE
 *    SET fahrenheit to celsius multiplied by 9 divided by 5 + 32
 *    IF the remainder fahrenheit divided by 1 is not equal to 0 THEN
 *      RETURN fahrenheit rounded to 1 decimal place
 *    END IF
 *    RETURN fahrenheit
 *  END SEQUENCE
 */
const convertToFahrenheit = function (celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;

  if (fahrenheit % 1 !== 0) return parseFloat(fahrenheit.toFixed(1));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
