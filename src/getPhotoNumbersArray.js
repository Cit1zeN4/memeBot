function getPhotoNumbersArray(db) {
  let arr = [];
  let index = 1;
  db.forEach((element) => {
    arr.push("" + index);
    index++;
  });
  return arr;
}

module.exports = getPhotoNumbersArray;
