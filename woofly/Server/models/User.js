const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
  pets: [{ type: String, count: Number }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
