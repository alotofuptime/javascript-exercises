/**
 * @param arr: array of objects each containing book data (title, author, etc.)
 * @returns array of book titles
 */
const getTheTitles = function (arr) {
  return arr.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
