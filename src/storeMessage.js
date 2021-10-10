const fs = require("fs");

/**
 *
 * @param {*} message
 * @param {Array} db
 */
function storeMessage(message, db) {
  const data = {
    user_id: message.from.id,
    username: message.from.username,
    photo_id: message.photo[message.photo.length - 1].file_id,
  };

  if (db.length !== 0) {
    const index = db.findIndex((v) => v.user_id === data.user_id);
    if (index !== -1) db[index] = data;
    else db.push(data);
  } else db.push(data);
}

module.exports = storeMessage;
