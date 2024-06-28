const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  type: String,
  quantity: Number
});

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
  pets: [petSchema],
  isProvider: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
