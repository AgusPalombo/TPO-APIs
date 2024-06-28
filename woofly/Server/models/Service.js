const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  duration: { type: String, required: true },
  frequency: { type: String, required: true },
  cost: { type: Number, required: true }
});

module.exports = mongoose.model('Service', ServiceSchema);
