const express = require('express');
const router = express.Router();
const Service = require('../models/Service'); // Asegúrate de tener un modelo Service definido en models/Service.js

// Ruta para buscar servicios
router.get('/', async (req, res) => {
  const query = req.query.q;
  try {
    const services = await Service.find({ name: { $regex: query, $options: 'i' } });
    res.status(200).json(services);
  } catch (error) {
    console.error('Error al buscar servicios:', error);
    res.status(500).json({ message: 'Error al buscar servicios' });
  }
});

module.exports = router;
