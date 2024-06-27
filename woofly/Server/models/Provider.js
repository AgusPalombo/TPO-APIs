const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String
});

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
