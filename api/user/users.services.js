const User = require('./user.model');

function getAllUsers() {
  return User.find({});
}

function getSingleUser(id) {
  return User.findById(id);
}

function findUserByEmail(email) {
  return User.findOne({ email });
}

function createUser(user) {
  return User.create(user);
}

function updateUser(id, user) {
  return User.findByIdAndUpdate(id, user, { new: true });
}

function deleteUser(id) {
  return User.findByIdAndRemove(id);
}

function addFavoriteByUser(id, favorite) {
  return User.findByIdAndUpdate(
    id,
    { $push: { lists: favorite } },
    { new: true },
  );
}

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  findUserByEmail,
  addFavoriteByUser,
};
