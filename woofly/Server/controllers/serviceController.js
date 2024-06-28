const Service = require('../models/Service');

// Crear un nuevo servicio
exports.createService = async (req, res) => {
  try {
    const { nombre, categoria, duracion, frecuencia, costo, providerEmail } = req.body;
    const newService = new Service({
      nombre,
      categoria,
      duracion,
      frecuencia,
      costo,
      providerEmail
    });
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ message: 'Error creating service' });
  }
};

// Obtener los servicios de un proveedor
exports.getServicesByProvider = async (req, res) => {
  try {
    const { providerEmail } = req.params;
    const services = await Service.find({ providerEmail });
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Error fetching services' });
  }
};

// Eliminar un servicio
exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    await Service.findByIdAndDelete(id);
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ message: 'Error deleting service' });
  }
};