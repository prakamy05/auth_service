let users = [];

module.exports = {
  getUsers: () => users,
  addUser: (user) => users.push(user),
  findUser: (username) => users.find(u => u.username === username)
};