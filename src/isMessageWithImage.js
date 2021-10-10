function isMessageWithImage(message) {
  if (message.photo) return true;
  else return false;
}

module.exports = isMessageWithImage;
