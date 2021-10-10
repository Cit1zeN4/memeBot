function isGroup(message) {
  if (message.chat.type === "group") return true;
  return false;
}

module.exports = isGroup;
