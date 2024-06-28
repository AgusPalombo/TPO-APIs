const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true },
  duracion: { type: String, required: true },
  frecuencia: { type: String, required: true },
  costo: { type: Number, required: true },
  providerEmail: { type: String, required: true }
});

module.exports = mongoose.model('Service', serviceSchema);
