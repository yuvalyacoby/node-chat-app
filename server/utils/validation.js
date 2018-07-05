const {Users} = require('./users');

var isRealString = (str) => {
  return typeof str === 'string' && str.trim().length > 0;
};

var isNameTaken = (name, roomUsers) => {
  name = name.toLowerCase();
  roomUsers = roomUsers.map((name) => name.toLowerCase());
  return (roomUsers.indexOf(name) > -1)
};

module.exports = {isRealString, isNameTaken};
