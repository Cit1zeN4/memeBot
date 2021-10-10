/**
 *
 * @param {Array} db
 */
function prepareMediaGroupData(db) {
  const newData = db.map((v, i) => {
    return { media: v.photo_id, type: "photo", caption: ++i };
  });

  return newData;
}

module.exports = prepareMediaGroupData;
