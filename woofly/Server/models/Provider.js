const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
  isProvider: { type: Boolean, default: true }
});

module.exports = mongoose.model('Provider', providerSchema);
