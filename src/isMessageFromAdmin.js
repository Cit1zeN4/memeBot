function isMessageFromAdmin(message) {
  if (message.from.username === process.env.ADMIN_USERNAME) return true;
  return false;
}

module.exports = isMessageFromAdmin;
