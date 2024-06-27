const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  // Otros campos relevantes para los servicios
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
