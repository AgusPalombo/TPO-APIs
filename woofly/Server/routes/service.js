const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Ruta para crear un nuevo servicio
router.post('/', serviceController.createService);

// Ruta para obtener los servicios de un proveedor
router.get('/:providerEmail', serviceController.getServicesByProvider);

// Ruta para eliminar un servicio
router.delete('/:id', serviceController.deleteService);