const leapYears = function (year) {
  const divisibleBy4 = year % 4 === 0;
  const divisibleBy100 = year % 100 === 0;
  const divisibleBy400 = year % 400 === 0;

  if (divisibleBy100 && divisibleBy400) {
    return true;
  } else if (!divisibleBy100 && divisibleBy4) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
