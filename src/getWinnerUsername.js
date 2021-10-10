const bubbleSort = require("./sort");

/**
 *
 * @param {{options: Array}} finalPoll
 * @param {Array} db
 */
function getWinnerUsername(finalPoll, db) {
  const results = new Array(...finalPoll.options);
  bubbleSort(results);
  const index = new Number(results[0].text);
  const winner = db[index - 1];
  const a = 1;
  return winner.username;
}

module.exports = getWinnerUsername;
