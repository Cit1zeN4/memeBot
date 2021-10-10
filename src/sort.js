/**
 *
 * @param {Array} arr
 */
function bubbleSort(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i].voter_count < arr[i + 1].voter_count) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}

module.exports = bubbleSort;
