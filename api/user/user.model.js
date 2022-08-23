const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/equipo-maravilla/image/upload/v1659716563/images/Account/Userlogo_pyxlip.png',
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlenght: 8,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
}, { timestamp: true });

UserSchema.virtual('profile').get(function () {
  const {
    firstName, lastName, email,
  } = this;

  return {
    firstName,
    lastName,
    email,
  };
});

UserSchema.pre('save', async function save(next) {
  const user = this;

  try {
    if (!user.isModify('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function comparePassword(password, next) {
  const user = this;

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch;
  } catch (error) {
    next(error);
    return false;
  }
};

const User = mongoose.model('user', UserSchema);

module.exports = User;
